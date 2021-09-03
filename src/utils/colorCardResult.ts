/* Function to get the color card result */
const getColorCardResult = (calculatedBMI: number) => {
    if (calculatedBMI < 18.5) {
        return "Danger";
    } else if (calculatedBMI > 18.5 && calculatedBMI < 25) {
        return "Success";
    } else if (calculatedBMI > 25 && calculatedBMI < 30) {
        return "Warning";
    } else {
        return "Danger";
    }
}

export default getColorCardResult;