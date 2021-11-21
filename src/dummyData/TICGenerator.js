
let writtenNumbers=["one","two","three","four","five"]
let enemyVariation=["group of enemy", "group of adversaries", "group of terrorist"]
let situationVariation=["encercling our troup", "firing at our troup", "threatening our troup"]
let manpadVariation=["enemy equiped with air missiles","vehicule capable of air missile", "identified risk of air missile"]
let vehiculeVariation=["identified vehicles", "enemy vehicles", "light vehicles","heavy vehicles"]
//let contextVariation=["manpad"]
//let vehiculeVariation=["heavy vehicles", "light vehicles"]

//let troopDescription=[""]

let createSentenceVariation=function(...sentenceGroup){
    let result=""
    for(let i=0;i<sentenceGroup.length;i++){
        if(typeof sentenceGroup[i]=='object'){
            result=result.concat(' ' + sentenceGroup[i][getRandomInt(sentenceGroup[i].length)])
        }
        if(typeof sentenceGroup[i]=='string'){
            result=result.concat(' ' + sentenceGroup[i])
        }
    }
    return result
}

let getRandomInt = function (max) {
    return Math.floor(Math.random() * max);
}

let createTIC=function(){
    let soldierGroup=getRandomInt(4)
    let naturalSentenceTroop=createSentenceVariation("There is " + writtenNumbers[soldierGroup],enemyVariation,situationVariation)
    let manpad=getRandomInt(3)+1
    let naturalSentenceManpad=createSentenceVariation("There is " + writtenNumbers[manpad],manpadVariation)
    let vehicleNumber=getRandomInt(5)
    let naturalSentenceVehicle=createSentenceVariation("There are " + writtenNumbers[vehicleNumber],vehiculeVariation)
    let startDate=Date.now()

    return {
        startDate,  
        soldierGroup,
        naturalSentenceTroop,
        manpad,
        naturalSentenceManpad,
        vehicleNumber,
        naturalSentenceVehicle
    }
}
module.exports={createTIC}