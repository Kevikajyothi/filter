let emp= {
    id:101,
    name:"kevi",
    salary:12000
}
details= {
    email:"kevi@gmail.com",
    sal:140000,
    loc: "kadapa"
    
}

let emp_Details={...emp,...details}
console.log(emp_Details);