//your JS code here. If required.
function daysOfAYear(year)
{
	if(year%4==0)
	{
		//Then It suppose to be a leap year and 366 day's..
		//but condition is ther if it is century year then check it if it is divisible by 400 or not

		if(year%100==0 && year%400!=0)return false;

		return true;
	}
}

let year=prompt("Enter the Year");

alert(daysOfAYear(year)?366:365);

