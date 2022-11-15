const validNameCategorySeason = (data) => {
    const {...object } = data;
    object.nameCategory = validSwitchCategory(object.category);
    object.nameSeason = validSwitchSeason(object.season);
    return object
}

const validSwitchCategory = (category) => {
    switch (category) {
        case "1":
            return "Todos"
        case "2":
            return "Arreglos florales"
        case "3":
            return "Globos y dulces"
        case "4":
            return "Desayunos"
        default:

            return ""
    }
}
const validSwitchSeason = (season) => {
    switch (season) {
        case "1":
            return "Todo el año"
        case "2":
            return "Feliz día"
        case "3":
            return "Amor"
        case "4":
            return "Cumpleaños"
        case "5":
            return "Día del padre"
        case "6":
            return "Día de la madre"
        case "7":
            return "Día del niño"
        default:

            return ""
    }
}

module.exports = validNameCategorySeason