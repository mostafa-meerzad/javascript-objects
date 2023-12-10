const user = {name: "John", age:34, job:"SE", email:"john@test.com"}

for(let prop in user){
  console.log(prop) // this loop variable will represent each properties of the user object 
  console.log(user[prop])
}