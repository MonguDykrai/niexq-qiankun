import React, { useEffect } from "react";
const Profile = () => {
	useEffect(() => {
		var requestOptions = {
			method: 'POST',
			redirect: 'follow'
		};
		fetch("http://localhost:5000/user/1", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
      })
      .catch((error) => console.log("error", error));
	}, []);
  return (
    <h2 className="app-nav-item" style={{ borderColor: "red" }}>
      Profile
    </h2>
  );
};

export default Profile;
