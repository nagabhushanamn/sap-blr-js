package com.sapient.pm.repository;

import java.util.List;

import com.sapient.pm.model.Product;

public interface ProductRepository {
	void save(Product product);
	public Product find(int productId);
	public List<Product> findAll();
	public void update(int id,double newPrice);
	public void delete(int idÏ);
}
