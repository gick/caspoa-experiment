
/*const distance = ['small', 'medium', 'far', 'extreme']

let categoryMissionsVariation = [
    { defense: 'As a general rule, you should never redirect an model in defense mission, except if the Air Support Request is extremely prioritary' }
    , { intel: 'You can most of the time safely rediret an model on intel mission, if the Air Support Request justifies it' }
    , { medical: 'Medical mission are absolutely prioritary, never deroure a medical mission unless there is a VIP in TIC' }]

*/


//Risk related to distance with respect to fuel


let fuelRisk = [
    { distance: 'small', fuel: 'low', risk: 2 },
    { distance: 'small', fuel: 'half full', risk: 0 },
    { distance: 'small', fuel: 'full', risk: 0 },

    { distance: 'medium', fuel: 'low', risk: 20 },
    { distance: 'medium', fuel: 'half full', risk: 10 },
    { distance: 'medium', fuel: 'full', risk: 5 },

    { distance: 'far', fuel: 'low', risk: 40 },
    { distance: 'far', fuel: 'half full', risk: 30 },
    { distance: 'far', fuel: 'full', risk: 5 },

    { distance: 'extreme', fuel: 'low', risk: 70 },
    { distance: 'extreme', fuel: 'half full', risk: 50 },
    { distance: 'extreme', fuel: 'full', risk: 10 },

]

let fuelRiskSentence=function(riskObject){
    let sentence="The distance to TIC location is "
    let description=sentence.concat(riskObject.distance).concat(" and the fuel is ").concat(riskObject.fuel)
    let finalSentence=description.concat(" there are " + riskObject.risk + "% risk that the mission cannot be performed")
    return finalSentence
}

//Risk of model being shot by manpad    
let manpadRisk = [
    { model: 'Mig-25', manpad: 0, flare: 0, risk: 0 },
    { model: 'Mig-25', manpad: 0, flare: 1, risk: 0 },
    { model: 'Mig-25', manpad: 1, flare: 1, risk: 20 },
    { model: 'Mig-25', manpad: 2, flare: 1, risk: 40 },
    { model: 'Mig-25', manpad: 2, flare: 0, risk: 60 },

    { model: 'Mig-22', manpad: 0, flare: 0, risk: 0 },
    { model: 'Mig-22', manpad: 0, flare: 1, risk: 0 },
    { model: 'Mig-22', manpad: 1, flare: 1, risk: 10 },
    { model: 'Mig-22', manpad: 2, flare: 1, risk: 20 },
    { model: 'Mig-22', manpad: 2, flare: 0, risk: 30 },

    { model: 'Mig-23', manpad: 0, flare: 0, risk: 0 },
    { model: 'Mig-23', manpad: 0, flare: 1, risk: 0 },
    { model: 'Mig-23', manpad: 1, flare: 1, risk: 30 },
    { model: 'Mig-23', manpad: 2, flare: 1, risk: 40 },
    { model: 'Mig-23', manpad: 2, flare: 0, risk: 60 },

    { model: 'F-22', manpad: 0, flare: 0, risk: 0 },
    { model: 'F-22', manpad: 0, flare: 1, risk: 0 },
    { model: 'F-22', manpad: 1, flare: 1, risk: 10 },
    { model: 'F-22', manpad: 2, flare: 1, risk: 20 },
    { model: 'F-22', manpad: 2, flare: 0, risk: 30 },

    { model: 'F-21', manpad: 0, flare: 0, risk: 0 },
    { model: 'F-21', manpad: 0, flare: 1, risk: 0 },
    { model: 'F-21', manpad: 1, flare: 1, risk: 10 },
    { model: 'F-21', manpad: 2, flare: 1, risk: 20 },
    { model: 'F-21', manpad: 2, flare: 0, risk: 30 },

    { model: 'Rafale-12', manpad: 0, flare: 0, risk: 0 },
    { model: 'Rafale-12', manpad: 0, flare: 1, risk: 0 },
    { model: 'Rafale-12', manpad: 1, flare: 1, risk: 10 },
    { model: 'Rafale-12', manpad: 2, flare: 1, risk: 20 },
    { model: 'Rafale-12', manpad: 2, flare: 0, risk: 30 },

]
let manpadRiskSentence=function(riskObject){
    let sentence="The model of plane is "
    let description=sentence.concat(riskObject.model).concat(" and there are ").concat(riskObject.manpad + "ennemies with manpad.")
    let finalSentence=description.concat("The aircraft has " + riskObject.flare + ' flare.').concat(" There is " + riskObject.risk + "% risk that the aircraft is hit by rocket.")
    return finalSentence
}

//Risk of ennemy soldier injuring/killing wrt distance and number
let soldierRisk = [
    { groupNumber: 0, distance: 'small', risk:  0},
    { groupNumber: 0, distance: 'medium', risk:  0},
    { groupNumber: 0, distance: 'far', risk: 0 },
    { groupNumber: 0, distance: 'extreme', risk: 0 },


    { groupNumber: 1, distance: 'small', risk: 3 },
    { groupNumber: 1, distance: 'medium', risk: 5 },
    { groupNumber: 1, distance: 'far', risk: 10 },
    { groupNumber: 1, distance: 'extreme', risk: 11 },

    { groupNumber: 2, distance: 'small', risk: 5 },
    { groupNumber: 2, distance: 'medium', risk: 9 },
    { groupNumber: 2, distance: 'far', risk: 13 },
    { groupNumber: 2, distance: 'extreme', risk: 15 },

    { groupNumber: 3, distance: 'small', risk: 9 },
    { groupNumber: 3, distance: 'medium', risk: 13 },
    { groupNumber: 3, distance: 'far', risk: 23 },
    { groupNumber: 3, distance: 'extreme', risk: 23 },

    { groupNumber: 4, distance: 'small', risk: 13 },
    { groupNumber: 4, distance: 'medium', risk: 23 },
    { groupNumber: 4, distance: 'far', risk: 33 },
    { groupNumber: 4, distance: 'extreme', risk: 43 },

]

let soldierRiskSentence=function(riskObject){
    let sentence="There are " + riskObject.groupNumber +" ennemies groups."
    let description=sentence.concat(" The distance to TIC is " + riskObject.distance)
    let finalSentence=description.concat(". There are "+ riskObject.risk)+ "% risk of our soldier being injured or killed"
    return finalSentence
}
//Evaluate the efficacy of the Rocket against soldiers group

let rocketSoldierEfficacy = [
    { groupNumber: 1, rocketType: 'M3', rocketQuantity: 1, efficacy: 60 },
    { groupNumber: 1, rocketType: 'M3', rocketQuantity: 2, efficacy: 80 },
    { groupNumber: 1, rocketType: 'M3', rocketQuantity: 3, efficacy: 90 },

    { groupNumber: 2, rocketType: 'M1', rocketQuantity: 1, efficacy: 40 },
    { groupNumber: 2, rocketType: 'M1', rocketQuantity: 2, efficacy: 60 },
    { groupNumber: 2, rocketType: 'M1', rocketQuantity: 3, efficacy: 80 },

    { groupNumber: 3, rocketType: 'M1', rocketQuantity: 1, efficacy: 30 },
    { groupNumber: 3, rocketType: 'M1', rocketQuantity: 2, efficacy: 50 },
    { groupNumber: 3, rocketType: 'M1', rocketQuantity: 3, efficacy: 60 },

    { groupNumber: 1, rocketType: 'M3', rocketQuantity: 1, efficacy: 60 },
    { groupNumber: 1, rocketType: 'M3', rocketQuantity: 2, efficacy: 80 },
    { groupNumber: 1, rocketType: 'M3', rocketQuantity: 3, efficacy: 90 },

    { groupNumber: 2, rocketType: 'M3', rocketQuantity: 1, efficacy: 40 },
    { groupNumber: 2, rocketType: 'M3', rocketQuantity: 2, efficacy: 60 },
    { groupNumber: 2, rocketType: 'M3', rocketQuantity: 3, efficacy: 80 },

    { groupNumber: 3, rocketType: 'M3', rocketQuantity: 1, efficacy: 30 },
    { groupNumber: 3, rocketType: 'M3', rocketQuantity: 2, efficacy: 50 },
    { groupNumber: 3, rocketType: 'M3', rocketQuantity: 3, efficacy: 60 },

    { groupNumber: 1, rocketType: 'T5', rocketQuantity: 1, efficacy: 60 },
    { groupNumber: 1, rocketType: 'T5', rocketQuantity: 2, efficacy: 80 },
    { groupNumber: 1, rocketType: 'T5', rocketQuantity: 3, efficacy: 90 },

    { groupNumber: 2, rocketType: 'T5', rocketQuantity: 1, efficacy: 40 },
    { groupNumber: 2, rocketType: 'T5', rocketQuantity: 2, efficacy: 60 },
    { groupNumber: 2, rocketType: 'T5', rocketQuantity: 3, efficacy: 80 },

    { groupNumber: 3, rocketType: 'T5', rocketQuantity: 1, efficacy: 30 },
    { groupNumber: 3, rocketType: 'T5', rocketQuantity: 2, efficacy: 50 },
    { groupNumber: 3, rocketType: 'T5', rocketQuantity: 3, efficacy: 60 },

]
let soldierEfficacySentence=function(riskObject){
    let sentence="There are " + riskObject.groupNumber +" ennemies groups."
    let description=sentence.concat(" There are " + riskObject.rocketQuantity +" rockets of type " + riskObject.rocketType)
    let finalSentence=description.concat(". The efficacy of the intervention against soldier should be around "+ riskObject.efficacy)
    return finalSentence
}

// Evaluate the efficacy of rocket against vehicles
let rocketVehicleEfficacy = [

    { vehicleNumber: 0, rocketType: 'M1', rocketQuantity: 1, efficacy: 100 },
    { vehicleNumber: 0, rocketType: 'M1', rocketQuantity: 2, efficacy: 100 },
    { vehicleNumber: 0, rocketType: 'M1', rocketQuantity: 3, efficacy: 100 },



    { vehicleNumber: 1, rocketType: 'M1', rocketQuantity: 1, efficacy: 60 },
    { vehicleNumber: 1, rocketType: 'M1', rocketQuantity: 2, efficacy: 80 },
    { vehicleNumber: 1, rocketType: 'M1', rocketQuantity: 3, efficacy: 90 },

    { vehicleNumber: 2, rocketType: 'M1', rocketQuantity: 1, efficacy: 40 },
    { vehicleNumber: 2, rocketType: 'M1', rocketQuantity: 2, efficacy: 60 },
    { vehicleNumber: 2, rocketType: 'M1', rocketQuantity: 3, efficacy: 80 },

    { vehicleNumber: 3, rocketType: 'M1', rocketQuantity: 1, efficacy: 30 },
    { vehicleNumber: 3, rocketType: 'M1', rocketQuantity: 2, efficacy: 50 },
    { vehicleNumber: 3, rocketType: 'M1', rocketQuantity: 3, efficacy: 60 },


    { vehicleNumber: 0, rocketType: 'M3', rocketQuantity: 1, efficacy: 100 },
    { vehicleNumber: 0, rocketType: 'M3', rocketQuantity: 2, efficacy: 100 },
    { vehicleNumber: 0, rocketType: 'M3', rocketQuantity: 3, efficacy: 100 },



    { vehicleNumber: 1, rocketType: 'M3', rocketQuantity: 1, efficacy: 60 },
    { vehicleNumber: 1, rocketType: 'M3', rocketQuantity: 2, efficacy: 80 },
    { vehicleNumber: 1, rocketType: 'M3', rocketQuantity: 3, efficacy: 90 },

    { vehicleNumber: 2, rocketType: 'M3', rocketQuantity: 1, efficacy: 40 },
    { vehicleNumber: 2, rocketType: 'M3', rocketQuantity: 2, efficacy: 60 },
    { vehicleNumber: 2, rocketType: 'M3', rocketQuantity: 3, efficacy: 80 },

    { vehicleNumber: 3, rocketType: 'M3', rocketQuantity: 1, efficacy: 30 },
    { vehicleNumber: 3, rocketType: 'M3', rocketQuantity: 2, efficacy: 50 },
    { vehicleNumber: 3, rocketType: 'M3', rocketQuantity: 3, efficacy: 60 },

    { vehicleNumber: 0, rocketType: 'T5', rocketQuantity: 1, efficacy: 100 },
    { vehicleNumber: 0, rocketType: 'T5', rocketQuantity: 2, efficacy: 100 },
    { vehicleNumber: 0, rocketType: 'T5', rocketQuantity: 3, efficacy: 100 },


    { vehicleNumber: 1, rocketType: 'T5', rocketQuantity: 1, efficacy: 60 },
    { vehicleNumber: 1, rocketType: 'T5', rocketQuantity: 2, efficacy: 80 },
    { vehicleNumber: 1, rocketType: 'T5', rocketQuantity: 3, efficacy: 90 },

    { vehicleNumber: 2, rocketType: 'T5', rocketQuantity: 1, efficacy: 40 },
    { vehicleNumber: 2, rocketType: 'T5', rocketQuantity: 2, efficacy: 60 },
    { vehicleNumber: 2, rocketType: 'T5', rocketQuantity: 3, efficacy: 80 },

    { vehicleNumber: 3, rocketType: 'T5', rocketQuantity: 1, efficacy: 30 },
    { vehicleNumber: 3, rocketType: 'T5', rocketQuantity: 2, efficacy: 50 },
    { vehicleNumber: 3, rocketType: 'T5', rocketQuantity: 3, efficacy: 60 },

]

let rocketEfficacySentence=function(riskObject){
    let sentence="There are " + riskObject.vehicleNumber +"ennemies vehicle."
    let description=sentence.concat("There are " + riskObject.rocketQuantity +"rockets of type " + riskObject.rocketType)
    let finalSentence=description.concat("The efficacy of the intervention against vehicle should be around "+ riskObject.efficacy)
    return finalSentence
}

let evaluateRisk = function (plane, TIC) {
    let fuelRiskStat = fuelRisk.find(elem => elem.fuel == plane.fuel && elem.distance == TIC.distance)
    let fuelRiskNL=fuelRiskSentence(fuelRiskStat)
    fuelRiskStat.nl=fuelRiskNL


    let manpadRiskStat = manpadRisk.find(elem =>
        elem.model == plane.model && elem.flare == plane.flare &&
        elem.manpad == TIC.manpad
    )
    let manpadRiskNL=manpadRiskSentence(manpadRiskStat)
    manpadRiskStat.nl=manpadRiskNL


    let soldierRiskStat = soldierRisk.find(elem => elem.groupNumber == TIC.groupNumber && elem.distance == TIC.distance)
    let soldierRiskNL = soldierRiskSentence(soldierRiskStat)
    soldierRiskStat.nl=soldierRiskNL

    let soldierRocketEfficacyStat = rocketSoldierEfficacy.find(elem =>
        elem.groupNumber == TIC.groupNumber &&
        elem.rocketType == plane.rocketType &&
        elem.rocketQuantity == plane.rocketQuantity
    )
    let soldierEfficacyNL=soldierEfficacySentence(soldierRocketEfficacyStat)
    soldierRocketEfficacyStat.nl=soldierEfficacyNL

    let vehicleRocketEfficacyStat = rocketVehicleEfficacy.find(elem =>
        elem.vehicleNumber == TIC.vehicleNumber &&
        elem.rocketType == plane.rocketType &&
        elem.rocketQuantity == plane.rocketQuantity
    )
    
    let vehicleEfficacyNL=rocketEfficacySentence(vehicleRocketEfficacyStat)
    vehicleRocketEfficacyStat.nl=vehicleEfficacyNL
    return {
        fuelRisk: fuelRiskStat,
        manpadRisk: manpadRiskStat,
        soldierRisk: soldierRiskStat,
        rocketSoldierEfficacy: soldierRocketEfficacyStat,
        rocketVehicleEfficacy: vehicleRocketEfficacyStat,

    }
}
exports.evaluateRisk = evaluateRisk