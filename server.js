const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const db = require("./models");
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3001;

const uri = process.env.MONGODB_URI;