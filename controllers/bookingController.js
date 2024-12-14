const { body, validationResult } = require("express-validator");
const nodeMailer = require("../middleware/nodeMailer");

exports.getBook = [
  body("date").isDate().withMessage("Du må legge til en dato!"),
  body("contact").notEmpty().withMessage("Du må legge til epost!"),
  body("appointment").notEmpty().withMessage("Du må velge tjeneste!"),
  body("time")
    .notEmpty()
    .withMessage("Hvilket klokkeslett må fylles ut!")
    .isString()
    .withMessage("Klokkeslett må være en gyldig tekst!"),
  body("special")
    .optional()
    .isString()
    .withMessage("Spesielle forespørseler må være tekst!"),
  body("name")
    .isString()
    .notEmpty()
    .withMessage("Du må legge til navnet ditt!"),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("bookingPage", {
        errors: errors.array(),
        formData: req.body,
      });
    }

    // Send email (no await)
    nodeMailer.sendMail(
      req.body.contact,
      `Ny booking: ${req.body.appointment} av ${req.body.name}`,
      `
      Hei,

      Du har mottatt en ny booking fra ${req.body.name}.

      Detaljer for bookingen:
      - Navn: ${req.body.name}
      - E-post: ${req.body.contact}
      - Tjeneste: ${req.body.appointment}
      - Dato: ${req.body.date}
      - Klokkeslett: ${req.body.time}
      - Spesielle forespørsler: ${req.body.special || "Ingen"}

      Mvh,
      LA BROWS System
    `
    );

    console.log("Booking email initiated");

    res.redirect("/");
  },
];
