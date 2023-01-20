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
