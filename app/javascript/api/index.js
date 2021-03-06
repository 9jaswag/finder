const TOKEN = document.querySelector('meta[name="csrf-token"]').content;
const URL = "/api/v1/email_search";

export const fetchValidEmails = () => {
  return fetch(URL).then(async (response) => {
    const data = await response.json();

    if (response.ok) {
      return data;
    }

    return Promise.reject(data);
  });
};

export const findEmail = (userDetail) => {
  return fetch(URL, {
    method: "POST",
    headers: {
      "X-CSRF-Token": TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetail),
  }).then(async (response) => {
    const data = await response.json();

    if (response.ok) {
      return data;
    }

    return Promise.reject(data);
  });
};
