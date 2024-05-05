//create an object call student 
//storte name, email ,marksObt as key for the object and assign some values,
//consider markObt should be between 0-500
//now calculate the percentage and division obtained by the student 
//if total marks is 500
//for division calculation:
//if percentage is greater than or equal to 90 ===>Print-Disctinction
//if percentage is greater than or eqal to 60 but less than 80 ===>print-First Division
//if percentage is greater than or equal to 45 but less than 60===>Print - Second Division

const student={
    name: "Pranish",
    email: "xyz@gmail.com",
    marksObt: 300,
   
}
const percentage=(student.marksObt / 500) * 100 ;

let division='' //makes const global variable

if (percentage >= 80) {
     division = "you obtained Distinction";

}
else if (percentage>=60 && percentage<=80){
    division="you obtained First Division";

}
else if (percentage>=45 && percentage<=60){
     division="you obtained Second Division";

}
 if (percentage>=35 && percentage<=45){
     division="you obtained Third Division";

}
 if (percentage<35 ){
     division="Sorry you failed";

}

console.log(division);



//hw
//Calculate tax needs to pay by a software developer.
//let us consider a software developer earns Npr. 5000000 per annum
//Calculate the amount of tax to be paid
//a. Monthly
//b. Yearly
//c. montly made salary
//d.yearly net salary
//If the tax bracket is as below:
//For the first Npr.500000 ---->1%
//For the next Npr. 500000----->15%
//for the next Npr. 700000---->25%
//For the next Npr. 1000000 ------>30%
//for any above that , --->36%
//without nesting this is faster process and efficient 

const annualIncome = 5000000;
const monthlySalary = annualIncome / 12;

let monthlyTax, yearlyTax, monthlyNetSalary, yearlyNetSalary;

if (annualIncome <= 500000) {
    monthlyTax = annualIncome * 0.01 / 12;
} else if (annualIncome <= 1000000) {
    monthlyTax = (500000 * 0.01 + (annualIncome - 500000) * 0.15) / 12;
} else if (annualIncome <= 1700000) {
    monthlyTax = (500000 * 0.01 + 500000 * 0.15 + (annualIncome - 1000000) * 0.25) / 12;
} else if (annualIncome <= 2700000) {
    monthlyTax = (500000 * 0.01 + 500000 * 0.15 + 700000 * 0.25 + (annualIncome - 1700000) * 0.30) / 12;
} else {
    monthlyTax = (500000 * 0.01 + 500000 * 0.15 + 700000 * 0.25 + 1000000 * 0.30 + (annualIncome - 2700000) * 0.36) / 12;
}

yearlyTax = monthlyTax * 12;
monthlyNetSalary = monthlySalary - monthlyTax;
yearlyNetSalary = annualIncome - yearlyTax;

console.log("Monthly Tax to be paid: NPR", monthlyTax);
console.log("Yearly Tax to be paid: NPR", yearlyTax);
console.log("Monthly Net Salary: NPR", monthlyNetSalary);
console.log("Yearly Net Salary: NPR", yearlyNetSalary);

//classmethod
//with nesting it will be lenthy


//print the following based on the day
//create a variale called day store name of day(any from sunday till saturday)
//if day is saturday or sunday ===> print holiday
//if day is friday  ====> print weekend
//if day is any other day ===> print weekday

const day= "saturday";
if(day=="sunday" || day=="saturday"){
    console.log("it is holiday");
}
else if(day=="friday"){
    console.log("weekend");
}
else{
    console.log("it is weekday");
}


//using switch
switch(day){
     case"sunday";
     case "saturday";
     console.log("holiday");
     break;
     case("friday");
     console.log("weekend");
     default:
        console.log("weekday");
}

switch(true){}
    case(employee.salary <= 500000)
    //body
    //calc
    
}