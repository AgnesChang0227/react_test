import express from "express";
import cookieSession from "cookie-session";
import passport from "passport";
import "./passport.js";
import cors from "cors";
import authRoute from "./routes/auth.js";

const app = express();

app.use(
    cookieSession({name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100})
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin: "http://localhost:3001",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

app.use("/auth", authRoute);

app.listen(5000, () => {
    console.log("server is running on port 5000")
})