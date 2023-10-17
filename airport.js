const pname = document.querySelector('#pNAME')
const range = document.querySelector('#pRANGE')
const speed = document.querySelector('#pSPEED')
const capacity = document.querySelector('#pCAPACITY')
const co2 = document.querySelector('#pCO2')
const fuelConsumption = document.querySelector('#pFUELCONSUMPTION')
const aCheck = document.querySelector('#pACHECK')
const mainCheck = document.querySelector('#pMAINCHECK')
const pilots = document.querySelector('#pPILOT')
const pilotsSalary = document.querySelector('#pPILOTSALARY')
const crew = document.querySelector('#pCREW')
const crewSalary = document.querySelector('#pCREWSALARY')
const engineers = document.querySelector('#pENGINEER')
const engineerssalary = document.querySelector('#pENGINEERSALARY')
const tech = document.querySelector('#pTECH')
const techsalary = document.querySelector('#pTECHSALARY')
const wholeCost = document.querySelector('#pWHOLEBUDJET')
const avgFuelCost = document.querySelector('#AVG-FUEL-COST')
const avgCo2Cost = document.querySelector('#AVG-CO2-EMISSION-COST')
const firstButton = document.querySelector('.p1butt')
const planeCompare = document.querySelector('.planeCompare')
const navBar = document.querySelector('.navbar')
const page1 = document.querySelector('.page1')
const aimedRange = document.querySelector('#DESIRED-RANGE')
const page1Result = document.querySelector('.page1Result')
const spanPlane = document.querySelector('.planesp')
const spanPlanePrice = document.querySelector('.pricesp')
const spanSeatCost = document.querySelector('.priceperseatsp')
const spanRealCost = document.querySelector('.priceperpasssp')


planeCompare.addEventListener('click',(e)=>{
    e.preventDefault()
    navBar.classList.add('navbarhidden')
    page1.classList.remove('page1hidden')
    pname.focus()
    
})

firstButton.addEventListener('click',()=>{
    const firstTerm = Math.round(aCheck.value/mainCheck.value)
    const fuelPerHour = Math.round((speed.value*1.852)*fuelConsumption.value*(avgFuelCost.value/1000))
    const hourlySalary = Math.round(((pilots.value*pilotsSalary.value)+(crew.value*crewSalary.value)+(engineers.value*engineerssalary.value)+(tech.value*techsalary.value))/24)
    const co2Emission = Math.round(((speed.value*1.852)*co2.value*(avgCo2Cost.value/1000)*capacity.value)/(range.value/(speed.value*1.852)));
    const nominalCostPerPerson = Math.round( ((firstTerm+fuelPerHour+hourlySalary+co2Emission)*(range.value/(speed.value*1.852)))/(capacity.value))
    const realCost = Math.round( ((firstTerm+fuelPerHour+hourlySalary+co2Emission)*(aimedRange.value/(speed.value*1.852)))/(capacity.value*.5))
    console.log(nominalCostPerPerson,realCost);
    console.log(firstTerm,fuelPerHour,hourlySalary,co2Emission);
    page1.classList.add('page1hidden')
    page1Result.classList.remove('page1ResultHidden')
    spanPlane.innerHTML = pname.value
    spanPlanePrice.innerHTML = wholeCost.value
    spanSeatCost.innerHTML = nominalCostPerPerson
    spanRealCost.innerHTML = realCost
})
