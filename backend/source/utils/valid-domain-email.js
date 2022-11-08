const validDomainEmail = (body) => {
    let emailAdmin = body.email;
    let admin = 0;
    let ema = emailAdmin.split("@");
    let punto = ema[1].split(".");
    if (punto[0] === "dolceregalo") {
        return admin = 1;
    }
    return admin
}

module.exports = validDomainEmail;