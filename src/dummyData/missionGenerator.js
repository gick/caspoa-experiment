let aircraftModel=['Mig-25','Mig-22','Mig-23','F-22','F-21','Rafale-12']
let aircraftNick=['TORO','SNAKE','BLACK','WILDCAT','WOLF','EAGLE','BEAR']
let missileType=['M1','M3','T5']
let fuelLevel=['low','half full','full']
let locationName=['alpha','beta','theta','zeta','lambda']
let distanceTIC=['small', 'medium', 'far', 'extreme']

let missionsType=[
    {category:'defense',type:['attack_base','escort_vip','escort_medevac','attack_fleet']},
    {category:'intel',type:['patrol','scout']},
    {category:'medical',type:['escort_medevac','recover_pilot','extract_injured_soldier']}]


let getRandomInt = function (max) {
    return Math.floor(Math.random() * max);
}

let createAircraftCols=function(){
    return [
    {label:'Name',field:'nickName'},
    {label:'Model',field:'model'},
    {label:'Rocket type',field:'rocketType'},
    {label:'Rocket number',field:'rocketQuantity'},
    {label:'Flare',field:'flare'},
    {label:'Fuel',field:'fuel'},
    {label:'Location',field:'location'},
    {label:'Distance to TIC',field:'distance'},
    {label:'Mission category',field:'category'},
    {label:'Mission type',field:'missionType'},

    ]
}





/*
let getRandomPerm=function(n){
    let init=[...Array(n).keys()]
    for(let i=0;i<n;i++){
        let d=getRandomInt(i)
        init[i]=init[d]
        init[d]=i
    }
    return init
}*/
let createRandomAircraft=function(){
    //aircraft part
    let nickName=aircraftNick[getRandomInt(aircraftNick.length)] + getRandomInt(20)
    let model=aircraftModel[getRandomInt(aircraftModel.length)]
    let rocketType = missileType[getRandomInt(missileType.length)]
    let rocketQuantity=getRandomInt(2)+1
    let flare=getRandomInt(2)
    let fuel=fuelLevel[getRandomInt(fuelLevel.length)]
    let location=locationName[getRandomInt(locationName.length)]
    let distance=distanceTIC[getRandomInt(distanceTIC.length)]

    //mission part
    let catIndex=getRandomInt(missionsType.length)
    let category=missionsType[catIndex].category
    let missionType=missionsType[catIndex].type[getRandomInt(missionsType[catIndex].type.length)]
    let missionLocation = locationName[getRandomInt(locationName.length)]

    return {
        nickName,
        model,
        rocketType,
        rocketQuantity,
        flare,
        fuel,
        location,
        distance,
        category,
        missionType,
        missionLocation

    }
}


/*
let createAirmap=function(mapSize){

}*/

let createWorldState=function(n){
 let res=[]
 while(res.length<n){
     res.push(createRandomAircraft())
 }
 return res
}

module.exports={createAircraftCols,createWorldState}