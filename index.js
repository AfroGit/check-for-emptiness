// Check for emptiness


// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

  let schedule = {};

  function isEmpty(obj) {
    for(let key in obj){
      return false;
    }
   return true;
  } 

  schedule["8:30"] = "get up";
 
  console.log(schedule);

  console.log( isEmpty(schedule) ); 

// ----------------------------------------------------


/* Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.  */ 

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = obj => {
   obj['Fuel Type'] = 'avocado oil'
}
/* Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true. */ 

let remotelyDisable = spaceship => {
   spaceship.disabled = true;
};
 greenEnergy(spaceship);
// This is how i called my 2 func()
 remotelyDisable(spaceship);
 console.log(spaceship);
//  Used console to confirm properties were changed/added.