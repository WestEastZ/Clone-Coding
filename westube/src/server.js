// Import
import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";

// Import
import rootRouter from "./router/rootRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";

// Import
import { localsMiddleware } from "./middleware";

// Variable
const app = express();
const logger = morgan("dev");

// View Engine (Pug)
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

// Morgan
app.use(logger);

// form vlaue understand // post
app.use(express.urlencoded({ extended: true }));

// Session
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

// Middleware
app.use(localsMiddleware);
//
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
// Router
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
