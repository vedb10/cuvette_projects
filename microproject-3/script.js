

let arr = require('./food.json')


function fooditems(){
let allfood = arr.map((item)=>{
    
        return item.foodname
    
})  

console.log(allfood)
}

function vegetables(){
let veggie = arr.filter((item)=>{
    if(item.category === "Vegetable"){
       
        return item.foodname
    }
})
console.log(veggie)

}


function allfruits(){
  let fruits = arr.filter((item)=>{
      if(item.category = "Fruit"){
         
          return item
      }
  })
  console.log(fruits)

}

function allprotein(){
  let protein = arr.filter((item)=>{
      if(item.category = "Protein"){
         
          return item
      }
  })
  console.log(protein)

}
function allnuts(){
  let nuts = arr.filter((item)=>{
      if(item.category = "Nuts"){
         
          return item
      }
  })
  console.log(nuts)

}
function allgrains(){
  let grain = arr.filter((item)=>{
      if(item.category = "Grain"){
         
          return item
      }
  })
  console.log(grain)
}


function alldairy(){
  let dairy = arr.filter((item)=>{
      if(item.category = "Dairy"){
         
          return item
      }
  })
  console.log(dairy)
}

function calorieabove100(){
  let calorieabove100 = arr.filter((item)=>{
    if(item.calorie >100){
      return item
    }
  })
  let calorieabove1001 = calorieabove100.map((item)=>{
    return item.foodname
  })

  console.log(calorieabove1001)
}

function caloriebelow100(){
  let caloriebelow100 = arr.filter((item)=>{
    if(item.calorie <100){
      return item
    }
  })
  let caloriebelow1001 = caloriebelow100.map((item)=>{
    return item.foodname
  })
  console.log(caloriebelow1001)
}

function sortprotein(){
  let sorting = arr.map((item)=>{
   return item

  })
  sorting.sort((a,b)=>b.protiens - a.protiens)
 
  console.log(sorting)
}

function sortcab(){
  let sorting = arr.map((item)=>{
   return item

  })
  sorting.sort((a,b)=>a.cab - b.cab)
 
  console.log(sorting)
}

console.log("All Food Items")
fooditems()
console.log("-------------------------------------------------------------------")
console.log("All Vegetables")
vegetables()
console.log("-------------------------------------------------------------------")
console.log("All Fruits")
allfruits()
console.log("-------------------------------------------------------------------")
console.log("All Nuts")
allnuts()
console.log("-------------------------------------------------------------------")
console.log("All Grains")
allgrains()
console.log("-------------------------------------------------------------------")
console.log("All Dairy")
alldairy()
console.log("-------------------------------------------------------------------")
console.log("cal above 100")
calorieabove100()
console.log("-------------------------------------------------------------------")
console.log("cal below 100")
caloriebelow100()
console.log("-------------------------------------------------------------------")
console.log("Protein high to low")
sortprotein()
console.log("-------------------------------------------------------------------")
console.log("cab low to high")
sortcab()
console.log("-------------------------------------------------------------------")
