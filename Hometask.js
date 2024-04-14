//1st variant 
let year = prompt('Скільки тобі років?',  '')
    if ( year == "" || year <= 0)
{alert ('Введіть число більше 0')}
    if (year % 10 ==1 && year != 11) 
{ alert(`Тобі ${year} рік`) }
    else if (year %10 ==2 ||year % 10 ==3 || year %10 ==4)
{alert (`Тобі ${year} роки`)}
    else 
{alert (`Тобі ${year} років`)}
gi