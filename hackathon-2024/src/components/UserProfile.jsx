import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import "../styles/UserProfiles.css";
import axios from "axios";

function UserProfile() {
  const { userData, setUserData } = useContext(AppContext);

  // Enum to map activity stages to descriptive labels
  const ActivityStage = {
    0: "Unfinished",
    1: "Completed",
  };

  // State to handle the current page of activities (initially start with page 0)
  const [currentPage, setCurrentPage] = useState(0);

  // State to toggle between unfinished and finished tasks
  const [viewCompleted, setViewCompleted] = useState(false);

  // State to store the generated summary
  const [summary, setSummary] = useState("");

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      axios
        .get(`https://hackaton2024api.azurewebsites.net/api/users/${id}`)
        .then((response) => {
          sessionStorage.setItem("data", JSON.stringify(response.data)); // Save to sessionStorage

          // Create the object with all fields from the API response
          const obj = {
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
            points: response.data.points || 0, // Default points to 0 if missing
            activities: response.data.activities || [], // Ensure activities is always an array
          };

          // Update the userData state with the complete object
          setUserData(obj);
        })
        .catch((error) => {
          console.error("Error fetching user data", error);
        });
    }
  }, [setUserData]);

  // Filter activities based on whether we're viewing completed or unfinished tasks
  const filteredActivities = userData.activities.filter(
    (activity) => activity.stage === (viewCompleted ? 1 : 0)
  );

  // Slice activities to show only the first 3 based on currentPage
  const activitiesToDisplay = filteredActivities.slice(
    currentPage * 3,
    (currentPage + 1) * 3
  );

  // Navigate to the next set of activities
  const handleNext = () => {
    if ((currentPage + 1) * 3 < filteredActivities.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Navigate to the previous set of activities
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle "Finish" button click
  const handleFinishActivity = (index) => {
    // Filter out completed activities (stage === 1) and get only unfinished ones
    const unfinishedActivities = userData.activities.filter(
      (activity) => activity.stage === 0
    );

    // Calculate the activity index based on the current page and the button index
    const activityIndex = currentPage * 3 + index;

    // Mark the selected activity as "Completed" (stage = 1)
    if (unfinishedActivities[activityIndex]) {
      unfinishedActivities[activityIndex].stage = 1;
    }

    // Update state with the new list of activities, ensuring that only unfinished activities are kept
    setUserData({
      ...userData,
      activities: unfinishedActivities.filter(
        (activity) => activity.stage === 0
      ), // Exclude activities with stage 1
    });

    // Optionally update the server with the completed activity
    const id = sessionStorage.getItem("id");
    axios
      .post(
        `https://hackaton2024api.azurewebsites.net/api/users/${id}/points`,
        {
          activityName: unfinishedActivities[activityIndex].name, // Send the name of the completed activity
        }
      )
      .then(() => {
        console.log("Activity status updated successfully");
      })
      .catch((error) => {
        console.error("Error updating activity status", error);
      });
  };

  // Toggle between unfinished and completed tasks
  const toggleView = () => {
    setViewCompleted(!viewCompleted);
    setCurrentPage(0); // Reset to the first page when toggling
  };

  // Send a request to GPT to summarize what was learned
  const handleRequestSummary = () => {
    const completedActivities = userData.activities.filter(
      (activity) => activity.stage === 1
    );

    const activityNames = completedActivities.map((activity) => activity.name);

    const summaryRequest = {
      prompt: `Please summarize what I have learned based on the following activities: ${activityNames.join(
        ", "
      )}.`,
      temperature: 0.5, // You can adjust the creativity level
      max_tokens: 150,
    };

    axios
      .post("https://api.openai.com/v1/completions", summaryRequest, {
        headers: {
          Authorization: `Bearer YOUR_OPENAI_API_KEY`, // Replace with your API key
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setSummary(response.data.choices[0].text); // Display the summary
      })
      .catch((error) => {
        console.error("Error requesting summary from GPT", error);
      });
  };

  return (
    <div className="user-container">
      {/* Top Section: User Photo and Summary */}
      <div className="top-section">
        <div
          className="image-wrapper user-photo"
          style={{
            backgroundImage: `url("/src/images/questionmarks.jpg")`,
          }}
        ></div>
        <div className="users-summary">
          <h2>Welcome, {`${userData.firstName} ${userData.lastName}`}</h2>
          <p>Email: {userData.email}</p>
          <p>Points: {userData.points}</p>
          <p>
            Here's your summary. You can update your profile and check your
            activities below.
          </p>
        </div>
      </div>

      {/* Center Section: Title */}
      <h1 className="activities-title">
        {viewCompleted ? "Completed Activities" : "Your Activities"}
      </h1>

      {/* Toggle View Button */}
      <div className="toggle-view">
        <button onClick={toggleView}>
          {viewCompleted
            ? "View Unfinished Activities"
            : "View Completed Activities"}
        </button>
      </div>

      {/* Bottom Section: Activities */}
      <div className="activities-section">
        {activitiesToDisplay.length > 0 ? (
          <div className="activities">
            {activitiesToDisplay.map((activity, index) => (
              <div key={index} className="activity-item">
                <h3>{activity.name}</h3>
                <div
                  className="image-wrapper activity-image"
                  style={{
                    backgroundImage: `url(${activity.pictureUrl})`,
                  }}
                ></div>
                <p>Stage: {ActivityStage[activity.stage]}</p>
                {!viewCompleted && (
                  <button
                    className="finish-button"
                    onClick={() => handleFinishActivity(index)}
                  >
                    Finish
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>No activities to display. Start something new!</p>
        )}
      </div>

      {/* Button for requesting summary */}
      {viewCompleted && (
        <div className="request-summary">
          <button onClick={handleRequestSummary}>Summarize My Learning</button>
        </div>
      )}

      {/* Display the generated summary */}
      {summary && (
        <div className="summary-section">
          <h3>Your Learning Summary:</h3>
          <p>{summary}</p>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="activity-navigation">
        <button
          className="scroll-button"
          onClick={handlePrevious}
          disabled={currentPage === 0}
        >
          &#8592; {/* Left Arrow for "Previous" */}
        </button>
        <button
          className="scroll-button"
          onClick={handleNext}
          disabled={(currentPage + 1) * 3 >= filteredActivities.length}
        >
          &#8594; {/* Right Arrow for "Next" */}
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
