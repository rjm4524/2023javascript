/**
 * 
 */
//2개의 숫자를 입력받아 두수를 사칙연산 결과값을 출력하세요.


function plus(){
var a =Number(prompt("첫번째 숫자를 입력하세요.","0"));
var b = Number(prompt("두번째 숫자를 입력하세요.","0"));
document.write("두수의 합 : " + (a+b));
document.write("<br>두수의 빼기 : " + (a-b));
document.write("<br>두수의 곱 :" + (a*b));
document.write("<br>두수의 나눔 :" + (a/b));
	
}

