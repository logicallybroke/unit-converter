const inputEl = document.getElementById('display');
const buttonEl = document.getElementById('convert-btn');
buttonEl.addEventListener('click', function () {
    const val = inputEl.value;
    let MtoF = val * 3.28084;
    let FtoM = val / 3.28084;
    let LtoG = val * 0.264172;
    let GtoL = val / 0.264172;
    let KtoP = val * 2.20462;
    let PtoK = val / 2.20462;
    let length = document.getElementById('length');
    let volume = document.getElementById('volume');
    let mass = document.getElementById('mass');
    length.innerHTML = `
    <p>${val} meters = ${MtoF.toFixed(3)} feets | ${val} feets = ${FtoM.toFixed(3)} meters</p>`
    volume.innerHTML = `
    <p>${val} liters = ${LtoG.toFixed(3)} gallons | ${val} gallons = ${GtoL.toFixed(3)} liters</p>`
    mass.innerHTML = `
    <p>${val} kilograms = ${KtoP.toFixed(3)} pounds | ${val} pounds = ${PtoK.toFixed(3)} kilograms</p>`
});
