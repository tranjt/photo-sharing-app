export default function router(app) {
    app.get("/", function(req, res){
        res.send({hi: "there"});
    });
}