import { signup } from "./controllers/authenticate";

export default function router(app) {
    app.get("/", function (req, res) {
        res.send({ hi: "there" });
    });

    app.post("/signup", signup);
}