import { Router, RequestHandler, Request, Response } from "express";
import { attempt } from "../utils/attempt";
import postsController from "./controllers";
import { Apartment, IApartment } from "./models";

const postRouter = Router();