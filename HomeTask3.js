<!DOCTYPE html>
<script>
"use strict";

let num = prompt("Введіть ціле число", "" )
let equal = prompt("Введіть одиницю виміру км, г та кг,", "")
switch (equal) {
  case "км":
    alert(num + " км це " + num * 1000 + " метрів");
    break;
  case "г":
    alert(num + " г це " + num * 60 + " хвилин");
    break;
  case "кг":
    alert(num + " це кг " + num * 1000 + " грамів"  );
    break;
  default:
    alert( "Введіть одиницю виміру із списку км, г або кг" );
    }
</script>