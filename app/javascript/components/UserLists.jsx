import React from "react";
import UserList from "./UserList";

export default ({ users = [] }) => {
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
