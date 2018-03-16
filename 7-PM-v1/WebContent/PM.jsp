<!DOCTYPE html>
<%@page import="java.util.*,com.sapient.pm.model.*" %>
<html>
<head>
<meta charset="UTF-8">
<title>pm</title>
<link href="css/bootstrap.css" rel="stylesheet">
</head>
<body>

	<div class="container">
	<div class="page-header">PM-v1</div>
	
	<div class="panel panel-default">
		<div class="panel-heading">All Products</div>
		<div class="panel-body">
			<table class="table">
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Price</th>
						<th>Make Date</th>
						<th>Descripton</th>
					</tr>
				</thead>
				<tbody>
				<% List<Product> products=(List<Product>)request.getAttribute("products"); %>
				 <%
				 	for(Product product:products){
				 %>	
				 	<tr>
						<td><%=product.getId() %></td>
						<td><%=product.getName() %></td>
						<td>&#8377;<%=product.getPrice() %></td>
						<td><%=product.getMakeDate() %></td>
						<td><%=product.getDescription() %></td>
					</tr>
				 <%
				 	}
				 %>
				</tbody>
			</table>
		</div>
	</div>

	<hr/>
	
		<div class="row">
			<div class="col-xs-8 col-sm-6 col-md-6">
			<div class="panel panel-default">
				<div class="panel-heading">Product Form</div>
				<div class="panel-body">
					<form action="">
						<div class="form-group">
							<label>Name:</label>
							<input name="name" class="form-control">
						</div>
						<div class="form-group">
							<label>Price:</label>
							<input type="number" name="price" class="form-control">
						</div>
						<div class="form-group">
							<label>Make-Date:</label>
							<input type="date" name="make_date" class="form-control">
						</div>
						<div class="form-group">
							<label>Description:</label>
							<textarea name="description" rows="5" cols="35" class="form-control"></textarea>
						</div>
						<button class="btn btn-primary">save</button>
					</form>	
				</div>
			</div>
		</div>
	
	</div>
	</div>
</body>
</html>





