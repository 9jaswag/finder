import React from "react";
import classnames from "classnames";

export default ({ user, index }) => (
  <tr className={classnames("", { even: index % 2 !== 0 })}>
    <td>{user.first_name}</td>
    <td>{user.last_name}</td>
    <td>{user.url}</td>
    <td>{user.email}</td>
  </tr>
);
