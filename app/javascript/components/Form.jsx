import React, { useState } from "react";
import Input from "./shared/Input";
import { findEmail } from "../api";

export default () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    url: "",
  });

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    const userDetail = { ...user, [name]: value };
    setUser(userDetail);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    console.log(user);
    // check they're all not empty
    
    try {
      const response = await findEmail(user);
    } catch (error) {
      console.log(error)
    }
    console.table(response);
    // update state
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <Input
          type="text"
          name="first_name"
          id="first_name"
          value={user.first_name}
          placeholder="First name"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <Input
          type="text"
          name="last_name"
          id="last_name"
          value={user.last_name}
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
