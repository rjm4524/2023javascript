<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
   <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>결과값</title>
		
	</head>
	<body>
	<%
		
		for(int i=1;i<=10; i++) {
		   out.println("<h1>"+i+"</h1>");
		}
	%>
		<h1>for문 사용</h1>
		<c:forEach var="i" begin="1" end="10" step="1">
			<h2>${i}</h2>
		</c:forEach>
		
	
	<h1>값 지정 - set</h1>
	<c:set var="user_id" value="abc" />
	<h2>아이디 지정 : ${user_id}</h2>
	<h2>이름 : ${param.name}</h2>
		<h1>param으로 값 가져오기</h1>
		<h2>결과값 : ${param.id}</h2>
		<hr>
		<h1>jstl if문 사용</h1>
		<c:if test="${param.id=='aaa'}">
			<h1>aaa님 환영합니다.</h1>
		</c:if>
		<c:if test="${param.id!='aaa'}">
			<h1>${param.id }님 환영합니다.</h1>
		</c:if>
		<hr>
		<h1>switch:choose</h1>
		<c:choose>
			<c:when test="${param.id=='aaa'}">
				<h1>aaa님 환영합니다.</h1>
			</c:when>
			<c:otherwise>
				<h1>${param.id }님 환영합니다.</h1>
			</c:otherwise>
		</c:choose>
	</body>
</html>