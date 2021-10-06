const { Router } = require('express');
const router = Router();
// const app = express();

// Root
router.get('/', (req, res) => {
	res.render("../views/index.ejs");
});

// Home
router.get("/register" ,(req, res) => {
	res.render("../views/register.ejs");
});

// Login
router.get('/login', (req, res) => {
	res.render("../views/login.ejs");
});

// 404 Handler
router.use((req, res, next) => {
	res.status(404).send('404 No he encontre ni mierda');
});

module.exports = router;
