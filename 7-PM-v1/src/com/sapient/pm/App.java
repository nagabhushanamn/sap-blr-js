package com.sapient.pm;

import java.util.Date;
import java.util.List;

import com.sapient.pm.model.Product;
import com.sapient.pm.repository.JdbcProductRepositoryImpl;
import com.sapient.pm.repository.ProductRepository;

public class App {

	public static void main(String[] args) {

		ProductRepository productRepository = new JdbcProductRepositoryImpl();

		// ---------------------------------------------------

		// Product product = new Product();
		// product.setName("Mobile");
		// product.setPrice(18000.00);
		// product.setMakeDate(new Date());
		// product.setDescription("New pro");
		// productRepository.save(product);

		// ---------------------------------------------------

		// Product product = productRepository.find(2);
		// System.out.println(product);

		// ---------------------------------------------------

		// List<Product> products=productRepository.findAll();
		// for(Product product:products) {
		// System.out.println(product);
		// }

		// ----------------------------------------------------

		// productRepository.update(2, 1000.00);

		// ----------------------------------------------------

		// productRepository.delete(2);

	}

}
