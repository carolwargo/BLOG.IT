const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Configuration for session handling
const sess = {
  secret: "Super secret secret", // Secret used to sign the session ID cookie
  cookie: {}, // Configuration for session cookie
  resave: false, // Determines whether the session should be saved back to the session store, even if the session was never modified
  saveUninitialized: true, // Determines whether a session should be created for the client if one doesn't exist
  store: new SequelizeStore({
    // Configuration for session store using Sequelize
    db: sequelize, // Sequelize database connection
  }),
};

app.use(session(sess)); // SETUP session middleware

const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine); // SET Handlebars as the view engine
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public"))); // SERVE static files from the "public" directory

app.use(require("./controllers/")); // INCLUDE routes defined in the controllers directory

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on port " + PORT)); // Start the server and listen on the specified port
});
