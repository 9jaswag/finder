import React from "react";
import classnames from "classnames";

export default ({ user, index }) => {
  const url = user.email.split("@")[1];

  return (
    <tr className={classnames("", { even: index % 2 !== 0 })}>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{url}</td>
      <td>{user.email}</td>
    </tr>
  );
};
