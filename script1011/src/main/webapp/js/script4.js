/**
 * 
 */
var input = Number(prompt("숫자를 입력하세요.","0"));
var sum = 0;
for(var i=1; i<=input; i++) {
	sum+=i;
}
document.write("1부터"+input+"까지의 합 :"+sum);