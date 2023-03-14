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
   const distanceTravelled = (destination - startingPoint)
   return distanceTravelled * feetPerBlock
  
}
console.log (distanceTravelledInFeet(50, 60))

// 









