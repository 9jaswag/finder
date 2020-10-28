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
          <>
            {users.map((user) => (
              <UserList user={user} key={user.id} />
            ))}
          </>
        )}
      </article>
    </section>
  );
};
