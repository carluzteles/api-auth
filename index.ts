import express from "express";
import App from "./src/app";

import { PORT } from "./src/config/defaults.config";

const app = new App(express(), +PORT)

app.initApp()