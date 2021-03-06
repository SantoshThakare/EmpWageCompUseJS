// UC-1 Use If Else Case
const IS_PART_TIME = 1;
const IS_FULL_TIME =2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS =25;
const NUM_OF_WORKING_DAY = 20;
const MAX_HRS_IN_MONTH = 160;

const IS_ABSENT = 0
 let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck == IS_ABSENT)
{  
console.log(" UC-1 : Employee Is ABSENT");
} 
else 
{
	console.log(" UC-1 : Employee Is PRESENT");
}

// UC-2- Use SwitchCase

{
	let empHrs =0;
	 empCheck = Math.floor(Math.random()* 10) % 3; 
	switch (empCheck){
		case IS_PART_TIME:
			empHrs= PART_TIME_HOURS;
			break;
			case IS_FULL_TIME:
				empHrs =FULL_TIME_HOURS;
				break;
				default:
					empHrs =0;
	}
	let empwage = empHrs * WAGE_PER_HOURS;
	console.log(" UC-2 : Emp Wage  :  "	 + empwage);
	}
	
	// UC-3 - Use Function -Refactor Code
	
	
	function getWorkingHours(empCheck) {
		switch (empCheck){
			case IS_PART_TIME:
				return PART_TIME_HOURS;
				case IS_FULL_TIME:
					return FULL_TIME_HOURS;
					default:
						return 0;
		}
	}	
	empCheck = Math.floor(Math.random() * 10) % 3;
	let empHrs = getWorkingHours(empCheck);
	let empwage = empHrs * WAGE_PER_HOURS;
	console.log(" UC-3 : Emp Hours  :  " + empHrs +  " EmpWage  :  " + empwage);
	
	// UC-4-For Loop
	{
		let totalEmpHrs =0;
		for (let day = 0; day <NUM_OF_WORKING_DAY; day++){
			let empCheck = Math.floor(Math.random() * 10) % 3;
			totalEmpHrs = getWorkingHours(empCheck);
		}
		let empwage = totalEmpHrs + WAGE_PER_HOURS;
		console.log(" UC-4 :  total Hrs  :    " + totalEmpHrs + "   empwage  :  " + empwage);
	}
	// UC-5-While loop
	{
		let totalEmpHrs = 0;
		let TotalWorkingDay = 0;
		while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
			TotalWorkingDay < NUM_OF_WORKING_DAY)
			{
				TotalWorkingDay++;
				let empCheck = Math.floor(Math.random() * 10) % 3;
				totalEmpHrs += getWorkingHours(empCheck);			
			}
			let empwage = totalEmpHrs* WAGE_PER_HOURS;
			console.log(" UC-5 :  Total Days  :   "  +   TotalWorkingDay + 	
			"Total Hrs   :   "   +	 totalEmpHrs +   " Empwage   :   "	 + empwage);
	}
	//UC-6- Store the Daily Wage along with Total Wage
	
	
	function calculateDailyWage(empHrs)
	{
		return empHrs * WAGE_PER_HOURS;
	}
	
	let totalEmpHrs = 0;
	 TotalWorkingDay =0;
	 empDailyWageArr = new Array();
	 let empDailyHrsMap = new Map();
	 let empDailyWageMap = new Map();
	while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
		TotalWorkingDay < NUM_OF_WORKING_DAY){
			TotalWorkingDay++;
			let empCheck = Math.floor(Math.random() * 10) % 3;
			let empHrs = getWorkingHours(empCheck);
			totalEmpHrs +=empHrs;
			empDailyWageArr.push(calculateDailyWage(empHrs));
			empDailyHrsMap.set(TotalWorkingDay,empHrs);
			empDailyWageMap.set(TotalWorkingDay, calculateDailyWage(empHrs));			
			let empwage = calculateDailyWage(totalEmpHrs); 
			console.log("UC-6 : Total Days  : "  + TotalWorkingDay  +   
			" Total Hrs : " + totalEmpHrs + " emp wage "  + empwage );
		}
	
//Array Helper Functions
//UC 7A- Calc tatal wage using Array for Each traversal or reduce method

let totEmpWage = 0;
function sum(dailywage)
{
	totEmpWage += dailywage;
}
empDailyWageArr.forEach(sum);
console.log("UC-7A: Total Days : " +TotalWorkingDay + 
" Total hrs : " + totalEmpHrs + " emp wage : " + totEmpWage);

function totalwages(totalwage, dailywage){
	return totalwage + dailywage;
}
console.log("UC-7A- Emp Wage with reduce : " + empDailyWageArr.reduce(totalwages, 0));


//UC-7B-show the Day Along with Daily Using Array map helper function
let DailyController=0;
function mapDayWithWage(dailywage)
{
DailyController++;
return DailyController + " = " + dailywage;
}
let mapDaywithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC-7B-Daily Wage Map");
console.log(mapDaywithWageArr);

//UC-7C- show Days when Full time wage 160 were earned
function fulltimewage(dailywage)
{
	return dailywage.includes("200");
}
let fullDayWageArray = mapDaywithWageArr.filter(fulltimewage);
console.log("UC-7C  -  Daily Wage filter when full time wage earn : ");
console.log(fullDayWageArray);

//UC-7D-Find the First Occurence  when Full time wage 160 were earned
function findfulltimewage(dailywage)
{
	return dailywage.includes("200");
}
console.log("UC-7D - full time wage 200 earned by EMployee : " +
mapDaywithWageArr.find(findfulltimewage));
//UC-7E-
function IsAllFullTimeWage(dailywage)
{
	return dailywage.includes("200");
}
console.log("UC-7E - check All element have full time wage : " +
fullDayWageArray.every(IsAllFullTimeWage));
//UC-7F-
function isAnyPartTimeWage(dailywage)
{
	return dailywage.includes("100");
}
console.log("UC-7F - Check if any part time wage : "  +
 mapDaywithWageArr.some(isAnyPartTimeWage));

//UC-7G-Find the number of days the Employee Worked
function totalDaysWorked(numofDays, dailywage)
{
	if (dailywage > 0) return numofDays+1;
	return numofDays;
}
console.log("UC-7G-  Number of Days emp worked : " + 
empDailyWageArr.reduce(totalDaysWorked , 0));

// UC-8
function totalWages(totalWage,dailyWage)
{
   return totalWage+dailyWage;
}

console.log("UC8 All map elements:"+Array.from(empDailyWageArr));
console.log("UC 8-Employee Wage from Map, Total Wage: " 
			+Array.from(empDailyWageArr.values()).reduce(totalWages,0));

// UC-9A Calc total Wage and total hours worked
const findTotal = (totalval,dailyVal) => 
{
	return totalval + dailyVal;
}
let count = 0;
totalEmpHrs = new Array();
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalsalary = empDailyWageArr.filter(dailyWage => dailyWage > 0)
					.reduce(findTotal, 0);
console.log("UC9A - Emp Wage With Arrow : " + " Total Hours: "  + totalHours +
 " Total Wages: " + totalsalary);
 
 // UC-9B Show the full workings days, part working days andno working days

let nonworkingDays = new Array();
let partworkingDays = new Array();
let fullworkingdays = new Array();
empDailyHrsMap.forEach((value, key, map) => 
{
	if (value == 8) fullworkingdays.push(key);
	else if (value == 4) partworkingDays.push(key);
	else nonworkingDays.push(key);
});
console.log("Full Working Days : " + fullworkingdays);
console.log("Part Working Days : " + partworkingDays);
console.log("Non Working Days : "  + nonworkingDays);

// UC- 10 Object Creation
let empDailyHrsAndWageArr = new Array();
 totalEmpHrs = 0;
 TotalWorkingDay =0; 

while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
	TotalWorkingDay < NUM_OF_WORKING_DAY)
	{
		TotalWorkingDay++;
	 	let empCheck = Math.floor(Math.random() * 10) % 3;
		let  empHrs = getWorkingHours(empCheck);
		totalEmpHrs +=empHrs;
		
		empDailyHrsAndWageArr.push(
			{
				dayNum:TotalWorkingDay,
				dailyHours:empHrs,
				dailywage: calculateDailyWage(empHrs),
				toString() {
					return '\nDay' + this.dayNum + '=> Working Hours is ' +this.dailyHours+  
					'   And wage Earned = ' + this.dailywage
				},
			});
		}

			console.log("UC-10  Showing Daily Hours Worked and Wage Earned : " 
			+empDailyHrsAndWageArr);
