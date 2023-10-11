/**
 * 타입까지 비교방법
 * 
 */



var input = Number(prompt("키를 입력하세요."));
var height = input/100;
var weight = Number(prompt("몸무게를 입력하세요."));

var result = weight / (height*height);

//if문 비교

if(result>=25) {
	document.write( "결과 :",result,"<br>비만입니다.")
}else if(result>=23.0) {
	document.write( "결과 :",result,"<br>경도비만입니다.")
}else if(result>=18.5) {
	document.write( "결과 :",result,"<br>정상체중입니다.")
	
}else if(result>=30) {
	document.write( "결과 :",result,"<br>중증도비만입니다.")
} 

