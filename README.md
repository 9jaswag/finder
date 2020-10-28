# Finder

A simple app that lets users find valid email addresses based on the contact’s name and url.

# Technology Stack

- Ruby 2.6.4
- Ruby on Rails 6.0.2
- PostgreSQL 11
- React 17

# Get started

- Clone the repository:

  ```sh
  git clone git@github.com:9jaswag/finder.git
  ```

- Ensure you have PostgreSQL on your computer.
- Set up database:
  ```sh
  rails db:setup
  ```
- Create an `application.yml` file at `config/application.yml`. In this file, add your Mailboxlayer API key:
  ```yml
  MAILBOXLAYER_API_KEY: <your API key here>
  ```
- Serve the app:
  ```sh
  rails server
  ```
- View the app in the browser at http://localhost:3000/
