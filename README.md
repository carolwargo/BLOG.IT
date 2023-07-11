# BLOG.IT

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

BLOG.IT is a content management system (CMS)-style blog site designed for developers to publish articles, blog posts, and share their thoughts and opinions. It provides a user-friendly interface that simplifies the process of creating, editing, and managing blog posts, with the added ability of engaging with other users through a post commenting feature.

## Table of Contents

* [Description](description)
* [Features](#features)
* [Installation](#installation)
* [Technologies](#technologies)
* [License](#license)
* [Acknowledgements](acknowledements)
* [Contact](#contact)

## Features

**User Authentication** New Users will sign up to create an account and returning Users simply log on to the site to gain access to their personalized dashboard- Where they can create new posts, view all posts and manage their post history.

**Homepage** The homepage serves as a central hub, displaying any existing blog posts and providing convenient navigation to the homepage, the dashboard, and the login/logout functions.

**Navigation** Authenticated Users can navigate through the site using the provided links.

**Post Function** Authenticated users can;

1. create new blog posts by providing a title and content,
2. edit existing posts,
3. delete existing posts through the dashboard.

**Comment System** Users can actively engage with the blog posts by leaving comments. Each comment includes the commenter's username and creation date, and they are displayed beneath the corresponding blog post.

**Idle Timeout** To ensure security, if a user remains idle on the site for a specific period, they will be prompted to log in again before being able to perform actions such as adding, updating, or deleting posts.

## Installation

To run locally, please follow these steps:

1. Clone the repository: git clone **<https://github.com/carolwargo/BLOG.IT/settings>**

2. Navigate to the project directory: cd project-directory

3. Install the dependencies: npm install

4. Set up the database: Configure the database connection in the config/connection.js file.

5. Run the database migrations: npm run db:migrate

6. Start the server: npm run start

7. Access the site in your browser at **<http://localhost:3001/>**

## Technologies

**Node.js**
**Express.js**
**Sequelize ORM**
**MySQL**
**HTML/CSS**
**JavaScript**
**Handlebars.js (View Engine)**

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.

## Acknowledgements

The development of this project was inspired by the need for a CMS-style blog site that offers a user-friendly interface and essential features for publishing articles and blog posts. We express our heartfelt gratitude to the open-source community for their valuable contributions and unwavering support.

### Contact

[![Avatar](https://user-images.githubusercontent.com/84477950/243474429-ab5f177d-0f73-41ba-b9ec-22e05087cec8.png)

Carol Wargo-

GitHub: <https://github.com/carolwargo>
"Mom of 2 men & 1 boy, living the dream."
