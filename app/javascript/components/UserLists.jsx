import React from "react";
import UserList from "./UserList";

const DUMMY_DATA = [
  {
    first_name: "John",
    last_name: "Doe",
    url: "8returns.com",
    email: "johndoe@email.com",
  },
  {
    first_name: "Jane",
    last_name: "Doe",
    url: "8returns.com",
    email: "janedoe@email.com",
  },
  {
    first_name: "Jane",
    last_name: "Doe",
    url: "8returns.com",
    email: "janedoe@email.com",
  },
  {
    first_name: "Jane",
    last_name: "Doe",
    url: "8returns.com",
    email: "janedoe@email.com",
  },
];

export default ({ users = DUMMY_DATA }) => {
  return (
    <section>
      <header>
        <h3>Valid Emails</h3>
      </header>
      <article>
        {users.length === 0 ? (
          <h2>No valid emails.</h2>
        ) : (
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>URL</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <UserList user={user} key={index} index={index} />
              ))}
            </tbody>
          </table>
        )}
      </article>
    </section>
  );
};
