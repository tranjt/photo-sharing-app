import { signup } from "./controllers/authenticate";
import passport from "passport";
import passportService from "./services/passport";

// session false not cookie base
const requireAuth = passport.authenticate("jwt", { session: false });

export default function router(app) {
    app.get("/", requireAuth, function (req, res) {
        res.send({ hi: "there" });
    });

    app.post("/signup", signup);
}