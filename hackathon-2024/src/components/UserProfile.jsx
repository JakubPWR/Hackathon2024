import React from "react";
import { AppContext } from "../App";
import { useContext } from "react";
function UserProfile() {
  const { userId } = useContext(AppContext);
  return (
    <>
      <p>Users is {userId}</p>
    </>
  );
}

export default UserProfile;
