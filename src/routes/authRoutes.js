const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post(
    "/signup",
    passport.authenticate('signup', { session: false }),
    async (req, res) => {
        res.status(200).json({
            success: true,
            message: 'Signup successfully',
            data: {
                user: req.user
            }
        })
    }
);

router.post(
    "/login",
    async (req, res, next) => {
        console.log("Signing in...")
        passport.authenticate(
            'login',
            async (err, user, info) => {
                console.log(user);
                // console.log(err)
                try {
                    if (!user) {
                        // console.log(err);
                        const error = new Error('Something went wrong...!');
                        return next(error);
                    }
                    else if(err){
                        console.log(err)
                    }
                    req.login(
                        user,
                        { session: false },
                        async (err) => {
                            if (err) return next(err); // pass the err to next callback.
                            const body = { _id: user._id, email: user.email };
                            const token = jwt.sign({ user: body }, 'TOP_SECRET');
                            return res.status(200).json({ token, success: true, message: "Successfully Signed in..." });
                        }
                    )
                } catch (error) {
                    console.log(error);
                    return next(error);
                }
            }
        ) (req, res, next);
    }
);

module.exports = router;