import {Strategy as GoogleStrategy} from "passport-google-oauth20";
import {Strategy as GithubStrategy} from "passport-github2";

import passport from "passport";

const GOOGLE_CLIENT_ID = "771069448361-3bkcddqtl4784qt8516vkuark0c3ioo6.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "771686f12a6f746946d5";
const GITHUB_CLIENT_SECRET = "cc4892877b5a5bfd6d569b7edff86a1ebed0526d";

passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
        done(null,profile);
    }));


passport.use(new GithubStrategy ({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
        // console.log(email);//github拿不到email
        console.log(profile);
        done(null,profile);
    }));



passport.serializeUser((user,done)=>{
    done(null,user);
})
passport.deserializeUser((user,done)=>{
    done(null,user);
})

