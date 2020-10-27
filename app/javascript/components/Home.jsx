import React from "react";
import Form from "./Form";
import UserLists from "./UserLists";

export default () => {
  return (
    <div className="wrapper">
      <section className="hero">
        <div className="content">
          <h3>Search for users' email by their names and URL</h3>
          <div className="form">
            <Form />
          </div>
        </div>
      </section>
      <main className="user-list">
        <UserLists />
      </main>
    </div>
  );
};
