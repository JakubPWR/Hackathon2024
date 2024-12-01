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

  // Slice activities to show only the first 3 based on currentPage
  const activitiesToDisplay = userData.activities.slice(
    currentPage * 3,
    (currentPage + 1) * 3
  );

  // Navigate to the next set of activities
  const handleNext = () => {
    if ((currentPage + 1) * 3 < userData.activities.length) {
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
    const updatedActivities = [...userData.activities];
    updatedActivities[currentPage * 3 + index].stage = 1; // Mark as "Completed" (1)

    // Update state and optionally make an API request to persist the change
    setUserData({ ...userData, activities: updatedActivities });

    // Optionally update the server
    const id = sessionStorage.getItem("id");
    axios
      .put(`https://hackaton2024api.azurewebsites.net/api/users/${id}`, {
        ...userData,
        activities: updatedActivities,
      })
      .then(() => {
        console.log("Activity status updated successfully");
      })
      .catch((error) => {
        console.error("Error updating activity status", error);
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
      <h1 className="activities-title">Your Activities</h1>

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
                <button
                  className="finish-button"
                  onClick={() => handleFinishActivity(index)}
                >
                  Finish
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No activities yet. Start something new!</p>
        )}
      </div>

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
          disabled={(currentPage + 1) * 3 >= userData.activities.length}
        >
          &#8594; {/* Right Arrow for "Next" */}
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
