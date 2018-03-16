package com.sapient.pm.web;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sapient.pm.model.Product;
import com.sapient.pm.repository.JdbcProductRepositoryImpl;
import com.sapient.pm.repository.ProductRepository;

@WebServlet(urlPatterns = { "/load-products", "/save-product", "/delete-product" })
public class ProductsController extends HttpServlet {

	private ProductRepository productRepository = new JdbcProductRepositoryImpl();

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String uri = req.getRequestURI();
		String path = uri.substring(uri.lastIndexOf('/'));
		if (path.equals("/load-products")) {
			List<Product> products = productRepository.findAll();
			req.setAttribute("products", products);
			req.getRequestDispatcher("PM.jsp").forward(req, resp);
		}
		if (path.equals("/delete-product")) {
			String id = req.getParameter("id");
			productRepository.delete(Integer.parseInt(id));
			resp.sendRedirect("load-products");
		}
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		// Input
		String name = req.getParameter("name");
		String price = req.getParameter("price");
		String make_date = req.getParameter("make_date");
		String description = req.getParameter("description");

		// validate..

		// map params to model object
		Product product = new Product();
		product.setName(name);
		product.setPrice(Double.parseDouble(price));
		product.setDescription(description);
		try {
			product.setMakeDate(new SimpleDateFormat("yyyy-MM-dd").parse(make_date));
		} catch (ParseException e) {
			e.printStackTrace();
		}

		productRepository.save(product);

		// req.setAttribute("status", "New Product saved");
		//
		// List<Product> products = productRepository.findAll();
		// req.setAttribute("products", products);

		// req.getRequestDispatcher("PM.jsp").forward(req, resp);
		resp.sendRedirect("load-products");
	}

}
