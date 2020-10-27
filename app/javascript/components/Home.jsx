import React from "react";
import Form from "./Form";
import UserLists from "./UserLists";

export default () => {
  return (
    <div className="wrapper">
      <section className="hero">
        <div className="form">
          <Form />
        </div>
      </section>
      <main className="user-list">
        <UserLists />
      </main>
    </div>
  );
};
