function howMuchWater(water, load, clothes){

    let total
    let max = load * 2   
    if (clothes <= load){
      total = clothes * water
    } else {
      if (clothes >load){
        clothes = clothes - load
        total = (clothes * water)/10 
      }
      
     if (clothes >= max){
       total = "Too much clothes"
     }
      
     if (clothes < load){
       total = 'Not enough clothes'
     }
      
    } return total
    }