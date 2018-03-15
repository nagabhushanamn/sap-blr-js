package com.sapient.pm.repository;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.SQLException;

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
}
