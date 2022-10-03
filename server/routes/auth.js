import express from "express";

const router = express.Router();
import passport from "passport";

router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    });
})
router.get("/login/success", (req, res) => {
    res.status(200).json({
        success: true,
        message: "successful",
        user:req.user,
        // cookies:req.cookies 或者這邊用jwt
    });
})

router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("http://localhost:3001/");
})

router.get("/google",
    passport.authenticate("google", {
        scope: ["profile","email"],
        prompt: "select_account",
    }));

router.get("/google/redirect",
    passport.authenticate("google", {
        successRedirect: "http://localhost:3001/",
        failureRedirect: "/login/failed",
    }))

router.get("/github",
    passport.authenticate("github", {
        scope: ["profile","email"],
        prompt: "select_account",
    }));

router.get("/github/redirect",
    passport.authenticate("github", {
        successRedirect: "http://localhost:3001/",
        failureRedirect: "/login/failed",
    }))

export default router;