package com.sapient.pm.repository;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.sapient.pm.db.MySQLConnectionFactory;
import com.sapient.pm.model.Product;

public class JdbcProductRepositoryImpl implements ProductRepository {

	@Override
	public void save(Product product) {

		Connection connection = null;
		try {
			connection = MySQLConnectionFactory.getConnection();

			String sql = "insert into shop_db.PRODUCTS(name,price,make_date,description) values(?,?,?,?)";
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setString(1, product.getName());
			ps.setDouble(2, product.getPrice());
			ps.setDate(3, new Date(product.getMakeDate().getTime()));
			ps.setString(4, product.getDescription());

			int count = ps.executeUpdate();
			if (count == 1) {
				System.out.println("New Product inserted..");
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (connection != null) {
				try {
					connection.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}

	}

	@Override
	public Product find(int productId) {
		Connection connection = null;
		Product product = null;
		try {
			connection = MySQLConnectionFactory.getConnection();

			String sql = "select * from shop_db.PRODUCTS where id=?";
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setInt(1, productId);

			ResultSet rs = ps.executeQuery();
			rs.next();

			product = new Product();
			product.setId(rs.getInt(1));
			product.setName(rs.getString(2));
			product.setPrice(rs.getDouble(3));
			product.setMakeDate(rs.getDate(4));
			product.setDescription(rs.getString(5));

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (connection != null) {
				try {
					connection.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return product;
	}

	@Override
	public List<Product> findAll() {
		Connection connection = null;
		List<Product> products = new ArrayList<>();
		try {
			connection = MySQLConnectionFactory.getConnection();

			String sql = "select * from shop_db.PRODUCTS";
			PreparedStatement ps = connection.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			while (rs.next()) {

				Product product = new Product();
				product.setId(rs.getInt(1));
				product.setName(rs.getString(2));
				product.setPrice(rs.getDouble(3));
				product.setMakeDate(rs.getDate(4));
				product.setDescription(rs.getString(5));

				products.add(product);
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (connection != null) {
				try {
					connection.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return products;
	}

	
	@Override
	public void update(int id,double newPrice) {

		Connection connection = null;
		try {
			connection = MySQLConnectionFactory.getConnection();

			String sql = "update shop_db.PRODUCTS set price=? where id=?";
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setDouble(1, newPrice);
			ps.setInt(2, id);

			int count = ps.executeUpdate();
			if (count == 1) {
				System.out.println("Product updated..");
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (connection != null) {
				try {
					connection.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}

	}
	
	@Override
	public void delete(int id) {

		Connection connection = null;
		try {
			connection = MySQLConnectionFactory.getConnection();

			String sql = "delete from shop_db.PRODUCTS where id=?";
			PreparedStatement ps = connection.prepareStatement(sql);
			ps.setInt(1, id);

			int count = ps.executeUpdate();
			if (count == 1) {
				System.out.println("Product deleted...");
			}

		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if (connection != null) {
				try {
					connection.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}

	}
	
}
