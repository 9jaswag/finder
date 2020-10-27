import React, { useState } from "react";
import Input from "./shared/Input";

export default () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    url: "",
  });

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    const userDetail = { ...user, [name]: value };
    setUser(userDetail);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(user);
    // check they're all not empty
    // make API request;
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <Input
          type="text"
          name="firstName"
          id="firstName"
          value={user.firstName}
          placeholder="First name"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <Input
          type="text"
          name="lastName"
          id="lastName"
          value={user.lastName}
          placeholder="Last name"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <Input
          type="text"
          name="url"
          id="url"
          value={user.url}
          placeholder="URL"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <button type="submit" className="submit">
          SEARCH
        </button>
      </div>
    </form>
  );
};
