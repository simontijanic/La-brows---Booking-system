const router = require("express").Router();

const indexController = require("../controllers/indexController");
const bookingController = require("../controllers/bookingController");

const rateLimit = require("../middleware/rateLimit")

router.get("/", rateLimit.getLimiter, indexController.getHome);
router.get("/tjenester", rateLimit.getLimiter, indexController.getTjenester);
router.get("/kampanjer", rateLimit.getLimiter, indexController.getKampanjer);

router.get("/booking", rateLimit.getLimiter, indexController.getBooking);
router.post("/booking", rateLimit.postLimiter, bookingController.getBook);

module.exports = router;
