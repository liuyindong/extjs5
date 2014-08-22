<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %> 
<c:set var="path" value="<%=request.getContextPath()%>"/>
<c:set var="res" value="${applicationScope.config.resUrl}" scope="application" />
