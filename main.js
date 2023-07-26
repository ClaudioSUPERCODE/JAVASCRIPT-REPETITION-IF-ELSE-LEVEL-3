
// IF & ELSE - LEVEL 2_2

// Erstelle ein HTML-Formular, um mit einem Range-Slider die Luftqualität (AQI:air-quality-index) in einem Bereich von 0 bis 150 anzuzeigen.
// Das Ergebnis soll in HTML ausgegeben werden. Dazu sollte jeweils die Hintergrundfarbe vom body angepasst werden.

// Deklariere die Funktion checkAirQuality() und nutze im Funktionskörper Conditional Statements (if...else).

// Bei einer Qualität kleiner-gleich 50 soll das Ergebnis:
// Level of health concern: Good 
// Level of health effect: Little or no risk

// Bei einer Qualität größer als 50 und kleiner-gleich 100 soll das Ergebnis:
// Level of health concern: Moderate 
// Level of health effect: Acceptable quality

// Bei einer Qualität größer als 100 und kleiner-gleich 150 soll das Ergebnis: 
// Level of health concern: Unhealthy for sensitive groups 
// Level of health effect: Generable publics not likely affected


function checkAirQuality() {
    let aqi = document.getElementById("aqi")
    let range = document.getElementById("range").value
    let concern = document.getElementById("concern")
    let effect = document.getElementById("effect")
    const body = document.getElementById("body").classList

    if (range <= 50) {
        aqi.innerHTML = "AQI: " + range
        concern.innerHTML = "LEVEL OF HEALTH CONCERN: Good"
        effect.innerHTML = "LEVEL OF HEALTH EFFECT: Little or no risk"
        body.add("good")
        body.remove("moderate")
        body.remove("unhealthy")
    } if (range > 50 && range <= 100) {
        aqi.innerHTML = "AQI: " + range
        concern.innerHTML = "LEVEL OF HEALTH CONCERN: Moderate"
        effect.innerHTML = "LEVEL OF HEALTH EFFECT: Acceptable quality"
        body.add("moderate")
        body.remove("good")
        body.remove("unhealthy")
    } if (range > 100) {
        aqi.innerHTML = "AQI: " + range
        concern.innerHTML = "LEVEL OF HEALTH CONCERN: Unhealthy for sensitive groups"
        effect.innerHTML = "LEVEL OF HEALTH EFFECT: Generable publics not likely affected"
        body.add("unhealthy")
        body.remove("moderate")
        body.remove("good")
    }
}