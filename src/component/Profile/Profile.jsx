import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  const { children, fullName, bio, profession, handleName } = props;
  function handleclick() {
    handleName(props.fullName);
  }

  return (
    <>
      <div>{children}</div>
      <div>
        <h1>{fullName}</h1>
        <p>{bio}</p>
        <br />
        <h2>{profession}</h2>
      </div>
      <button onClick={handleclick}>Alert</button>
    </>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
