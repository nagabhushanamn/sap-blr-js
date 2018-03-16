package com.sapient.pm.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sapient.pm.model.Product;
import com.sapient.pm.repository.JdbcProductRepositoryImpl;
import com.sapient.pm.repository.ProductRepository;

@WebServlet(urlPatterns = { "/pm" })
public class ProductsController extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		ProductRepository productRepository = new JdbcProductRepositoryImpl();
		List<Product> products = productRepository.findAll();
		req.setAttribute("products", products);
		req.getRequestDispatcher("PM.jsp").forward(req, resp);
	}

}
