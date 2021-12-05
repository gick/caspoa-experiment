
let writtenNumbers=["one","two","three","four","five"]
const dist=['small','medium','far','extreme']

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
    let groupNumber=getRandomInt(4)+1
    let naturalSentenceTroop=createSentenceVariation("There is " + writtenNumbers[groupNumber],enemyVariation,situationVariation)
    let manpad=getRandomInt(3)
    let naturalSentenceManpad=createSentenceVariation("There is " + writtenNumbers[manpad],manpadVariation)
    let vehicleNumber=getRandomInt(5)
    let naturalSentenceVehicle=createSentenceVariation("There are " + writtenNumbers[vehicleNumber],vehiculeVariation)
    let startDate=Date.now()
    let distance=dist[getRandomInt(4)]

    return {
        startDate,  
        groupNumber,
        manpad,
        vehicleNumber,
        distance,
        naturalSentenceTroop,
        naturalSentenceManpad,
        naturalSentenceVehicle
    }
}
module.exports={createTIC}