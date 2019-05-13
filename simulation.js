//Wind Turbine Simulation/Calculator
//Written by: Freddie Clarke - Rye High School - 2019
//Language: JavaScript

//Comment in order to push a new Git commit

var button1 = document.getElementById("button1");

button1.onclick = function() {
    var airDensityVal = document.getElementById("airDensity").value;
    var rotatorAreaVal = document.getElementById("rotatorArea").value;
    var perfCoefficientVal = document.getElementById("perfCoefficient").value;
    var windVelocityVal = document.getElementById("windVelocity").value;
    var generatorEfficiencyVal = document.getElementById("generatorEfficiency").value;
    var gearBoxEfficiencyVal = document.getElementById("gearBoxEfficiency").value;
    
    
    // Log values if necessary for debugging
    // -------------------------------------
    // console.log(airDensityVal)
    // console.log(rotatorAreaVal)
    // console.log(perfCoefficientVal)
    // console.log(windVelocityVal)
    // console.log(generatorEfficiencyVal)
    // console.log(gearBoxEfficiencyVal)
    
    
    var returnVal = 0.5*airDensityVal*rotatorAreaVal*perfCoefficientVal*windVelocityVal*windVelocityVal*windVelocityVal*generatorEfficiencyVal*gearBoxEfficiencyVal;
    console.log(returnVal);
    var roundedVal = Math.round(returnVal);
    console.log(roundedVal);

    document.getElementById("finalVal").innerHTML = roundedVal;
}