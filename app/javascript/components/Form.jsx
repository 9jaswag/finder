import React, { useEffect, useState } from "react";
import Input from "./shared/Input";
import { findEmail } from "../api";
import Loader from "./shared/Loader";

export default ({ setUserState }) => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    url: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldSubmitForm, setShouldSubmitForm] = useState(false);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    const userDetail = { ...user, [name]: value.trim() };
    setError(null);
    setUser(userDetail);
  };

  const submitForm = async () => {
    const values = Object.values(user);

    if (values.indexOf("") !== -1) {
      setError("Please fill all fields.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await findEmail(user);
      setUserState((prevState) => [...prevState, response.user]);
      setError(null);
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 2000);
    }

    setUser({
      first_name: "",
      last_name: "",
      url: "",
    });
    setIsLoading(false);
    setShouldSubmitForm(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setShouldSubmitForm(true);
  };

  useEffect(() => {
    if (shouldSubmitForm) {
      submitForm();
    }
  }, [shouldSubmitForm]);

  return (
    <>
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
          <button type="submit" className="submit" disabled={isLoading}>
            SEARCH
            {isLoading && <Loader width={12} height={12} fill="#ffffff" />}
          </button>
        </div>
      </form>
      {error && <span className="error">{error}</span>}
    </>
  );
};
