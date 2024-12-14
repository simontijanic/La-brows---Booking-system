exports.getHome = (req, res) => {
    res.render("indexPage", { path: req.path })
}

exports.getTjenester = (req, res) => {
    res.render("tjenesterPage", { path: req.path })
}

exports.getBooking = (req, res) => {
    res.render("bookingPage", { path: req.path })
}

exports.getKampanjer = (req, res) => {
    res.render("kampanjerPage", { path: req.path })
}