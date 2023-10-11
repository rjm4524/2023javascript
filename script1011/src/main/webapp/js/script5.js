/**
 *두수를 입력받아 첫번째 숫자부터 두번째 숫자까지의 합
  
 */

 
 var input1 = Number(prompt("숫자를 입력하세요.","0"));
 var input2 = Number(prompt("숫자를 입력하세요.","0"));
 
 var sum = 0;
 for(var i=input1; i<=input2; i++){
	 sum = sum + i;
 }
 document.write("두수의 합 :"+sum);