// Code your solution in this file!
  //culculate distance in Blocks 
function distanceFromHqInBlocks(pickupPoint) {


 const headQuater = 42 

 if (pickupPoint >= 42){
    
  return pickupPoint - headQuater

 }
 else{

 return headQuater -pickupPoint  
 }


}
  //converts the value in blocks to feet

function distanceFromHqInFeet(pickupPoint) {

   const distanceInBlocks =  distanceFromHqInBlocks(pickupPoint)
   const feetPerBlock = 264

   return distanceInBlocks * feetPerBlock

}

//culculate distance in feet from start to finish
function distanceTravelledInFeet(startingPoint, destination) {
  
   const feetPerBlock = 264
   const distanceTravelled = Math.abs(destination - startingPoint)
   return distanceTravelled * feetPerBlock
  
}

// 
function calculatesFarePrice(startingPoint, destination){
 const distanceInTravelled =  distanceTravelledInFeet(startingPoint, destination)
 const costPerfeet = 0.02
 const costOverTwothousand = 25

if (distanceInTravelled < 400 ){
  
  return 0

}
else if ( distanceInTravelled <= 2000){

  return (distanceInTravelled -400) * costPerfeet
}
else if ( distanceInTravelled > 2000 && distanceInTravelled <=  2500){

  return 25
}
else {
  return 'cannot travel that far'
}


}





