//arrow function 
const sommeTotal=(a,b)=>a+b
const randomFunction=(a,b)=>{
    const x=a+b
    const y=b-a
    return x+y
}
const a=20
const b=30
//tenary operation 
if (a>b){
    console.log(a>b)
}else{
    console.log(a<b)
}
a>b ?console.log(a>b):console.log(a<b)
//regular expression
const firstName="med"
const lastName="amine"
console.log(firstName+" "+lastName)
console.log(`${firstName}  ${lastName}`)
//spread object
const user={
    firstUserName:"alex",
    lastName,
    age:24
}
console.log({...user,jobTitle:"Developer"})
//Destructing the object 
const{firstUserName}=user
console.log(firstUserName)