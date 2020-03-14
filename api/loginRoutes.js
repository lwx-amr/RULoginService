import express from "express";
import { login, checkAuthen} from "../service/loginController";

const router = express.Router();

router.get("/login", checkAuthen, (req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Hello from the server side');
    res.contentType('text').send("Hello, we are very happy that you're here");
});
router.post("/login", login);

module.exports = router;
