import React, { useState, useEffect } from "react";
import Form from "./Form";
import UserLists from "./UserLists";
import { fetchValidEmails } from "../api";
import Loader from "./shared/Loader";

export default () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);

    try {
      const response = await fetchValidEmails();
      setUsers(response.user);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="wrapper">
      <section className="hero">
        <div className="content">
          <h3>Search for users' email by their names and URL</h3>
          <div className="form">
            <Form setUsers={setUsers} />
          </div>
        </div>
      </section>
      <main className="user-list">
        {isLoading ? <Loader /> : <UserLists users={users} />}
      </main>
    </div>
  );
};
