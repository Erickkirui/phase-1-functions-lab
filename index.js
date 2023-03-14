// Code your solution in this file!
function distanceFromHqInBlocks(pickupPoint) {
  //returns the number of blocks given a value

 const headQuater = 42 

 //return pickupPoint - headQuater
 if (pickupPoint >= 42){
    
  return pickupPoint - headQuater

 }
 else{

 return headQuater -pickupPoint  
 }


}

function distanceFromHqInFeet(pickupPoint) {
 
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
   const distanceInBlocks =  distanceFromHqInBlocks(pickupPoint)
   const feetPerBlock = 264

   return distanceInBlocks * feetPerBlock
   
}





