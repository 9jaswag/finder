import React from "react";
import classnames from "classnames";

export default ({ user }) => {
  const url = user.email.split("@")[1];

  return (
    <article className="card">
      <div className="info">
        <h3>First Name</h3>
        <p>{user.first_name}</p>
      </div>
      <div className="info">
        <h3>Last Name</h3>
        <p>{user.last_name}</p>
      </div>
      <div className="info">
        <h3>URL</h3>
        <p>{url}</p>
      </div>
      <div className="info">
        <h3>Email</h3>
        <p>{user.email}</p>
      </div>
    </article>
  );
};
