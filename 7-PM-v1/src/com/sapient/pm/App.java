package com.sapient.pm;

import java.util.Date;

import com.sapient.pm.model.Product;
import com.sapient.pm.repository.JdbcProductRepositoryImpl;
import com.sapient.pm.repository.ProductRepository;

public class App {

	public static void main(String[] args) {

		Product product = new Product();
		product.setName("Laptop");
		product.setPrice(198000.00);
		product.setMakeDate(new Date());
		product.setDescription("Mac pro");

		ProductRepository productRepository = new JdbcProductRepositoryImpl();
		productRepository.save(product);

	}

}
