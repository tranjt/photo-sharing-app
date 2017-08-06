import { signup, signin } from "./controllers/authenticate";
import passport from "passport";
import passportService from "./services/passport";

// session false not cookie base
const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

export default function router(app) {
    app.get("/", requireAuth, function (req, res) {
        res.send({ hi: "there" });
    });

    app.post("/signin", requireSignin, signin)

    app.post("/signup", signup);
}