let dresses =[{model:"anarkali" ,color:"red",fabric:"silk",price:30000}, 
             {model:"halfsaree",color:"pink",fabric:"silk",price:45000},
              {model:"saree",color:"white",fabric:"georgette",price:50000},
              {model:"panjabi",color:"blue",fabric:"chiffon",price:25000},
              {model:"pants",color:"black",fabric:"jeans",price:10000},
              {model:"sharara",color:"yellow",fabric:"elastic",price:15000},
              {model:"saree",color:"green",fabric:"pattu",price:55000},
              {model:"tshirts",color:"grey",fabric:"cotton",price:10000},
              {model:"blazers",color:"black",fabric:"pencil cut",price:50000},
              {model:"kurta",color:"rose",fabric:"cotton",price:10000}] 



let new_Dresses =dresses.filter((dress)=> {
    return dress.price < 40000
})


console.log(new_Dresses);
 





