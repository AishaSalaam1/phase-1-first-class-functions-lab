// Code your solution in this file!

 
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  function returnFirstTwoDrivers(people){
    return people.slice(0,2);
  }
// console.log(returnFirstTwoDrivers());
function returnLastTwoDrivers(kind){
    return kind.slice(-2,kind.lenght)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

let fareMultiplier;
function createFareMultiplier(x){
return function(){
    return x*x
}
}
function fareDoubler(pass){
    return pass * 2
    
}
function fareTripler(milhan){
    return milhan * 3
}
const selectDifferentDrivers = (arrayOfDrivers, gift) => {
    return  gift(arrayOfDrivers);

    
}