import express from "express";
import App from "./src/app";

import { PORT } from "./src/config/defaults.config";

import { AuthController } from "./src/controller/Auth.controller";

const app = new App([new AuthController()], express(), +PORT)

app.initApp()