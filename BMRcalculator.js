var ageMax = 150;
var heiMax = 300;
var weiMax = 1100;


function calcStaff() {
    var ageValue = document.getElementById("age").value;
    if ((0 > ageValue) || (ageValue > 150))
    { document.getElementById("limAge").innerHTML = "*range from 1 to 150"; }
    else { document.getElementById("limAge").innerHTML = ""; }

    var heightValue = document.getElementById("height").value;
    if ((0 > heightValue) || (heightValue > 300))
    { document.getElementById("limHei").innerHTML = "*range from 1 to 300"; }
    else { document.getElementById("limHei").innerHTML = ""; }

    var weightValue = document.getElementById("weight").value;
    if ((0 > weightValue) || (weightValue > 1100))
    { document.getElementById("limWei").innerHTML = "*range from 1 to 1100"; }
    else { document.getElementById("limWei").innerHTML = ""; }


    var bmrResult;
    if ((document.getElementById("metric").checked) && (document.getElementById("men").checked)) {
        bmrResult = (66.5 + (13.75 * weightValue) + (5.003 * heightValue) - (6.755 * ageValue)) * 1;
        document.getElementById("heiUnit").innerHTML = "cm";
        document.getElementById("weiUnit").innerHTML = "kg";
    }
    else if ((document.getElementById("metric").checked) && (document.getElementById("women").checked)) {
        bmrResult = (655.1 + (9.563 * weightValue) + (1.850 * heightValue) - (4.676 * ageValue)) * 1;
        document.getElementById("heiUnit").innerHTML = "cm";
        document.getElementById("weiUnit").innerHTML = "kg";
    }
    else if (document.getElementById("imperial").checked && document.getElementById("women").checked) {
        bmrResult = (655.1 + (4.35 * weightValue) + (4.7 * heightValue) - (4.7 * ageValue)) * 1;
        document.getElementById("heiUnit").innerHTML = "inches";
        document.getElementById("weiUnit").innerHTML = "pounds";
    }
    else {
        bmrResult = (66 + (6.2 * weightValue) + (12.7 * heightValue) - (6.76 * ageValue)) * 1;
        document.getElementById("heiUnit").innerHTML = "inches";
        document.getElementById("weiUnit").innerHTML = "pounds";
    }
    document.getElementById("bmr").innerHTML = bmrResult.toFixed(2);

    var carResult;
    if (document.getElementById("exerNo").selected) { carResult = bmrResult * 1.2; }
    else if (document.getElementById("exerLi").selected) { carResult = bmrResult * 1.375; }
    else if (document.getElementById("exerMo").selected) { carResult = bmrResult * 1.55; }
    else if (document.getElementById("exerHe").selected) { carResult = bmrResult * 1.725; }
    else { carResult = bmrResult * 1.9; }
    document.getElementById("calories").innerHTML = carResult.toFixed(2);
}

function resetForm() {
    document.getElementById("age").value = "25";
    document.getElementById("height").value = "160";
    document.getElementById("weight").value = "50";
    document.getElementById("women").checked = "checked";
    document.getElementById("metric").checked = "checked";
    calcStaff();
    createEventListener();
}

function createEventListener() {
    document.getElementById("age").addEventListener("change", calcStaff, false);
    document.getElementById("height").addEventListener("change", calcStaff, false);
    document.getElementById("weight").addEventListener("change", calcStaff, false);
    document.getElementById("women").addEventListener("change", calcStaff, false);
    document.getElementById("men").addEventListener("change", calcStaff, false);
    document.getElementById("metric").addEventListener("change", calcStaff, false);
    document.getElementById("imperial").addEventListener("change", calcStaff, false);
    document.getElementById("exerNo").addEventListener("change", calcStaff, false);
    document.getElementById("exerLi").addEventListener("change", calcStaff, false);
    document.getElementById("exerMo").addEventListener("change", calcStaff, false);
    document.getElementById("exerHe").addEventListener("change", calcStaff, false);
    document.getElementById("exerVe").addEventListener("change", calcStaff, false);
}
window.addEventListener("load", resetForm, false);