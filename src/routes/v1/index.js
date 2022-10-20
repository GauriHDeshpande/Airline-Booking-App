const express = require("express");
const router = express.Router();
const passport = require("passport")
const jwt = require("jsonwebtoken")

const helpController = require("../../controllers/helpController");


router.get("/help", helpController.helpDetails);

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
        passport.authenticate(
            'login',
            async (err, user, info) => {
                try {
                    if (err || !user) {
                        const error = new Error('Something went wrong...!');
                        return next(error);
                    }
                    req.login(
                        user,
                        { session: false },
                        async (err) => {
                            if (err) return next(err);
                            const body = { id: user._id, email: user.email };
                            const token = jwt.sign({ user: body }, 'Top_Secret');
                            return res.status(200).json({ token, success: true, message: "Successfully Logined..." });
                        }
                    )
                } catch (error) {
                    console.log(error);
                    return next(error);
                }
            }
        )
    }
);

module.exports = router;

