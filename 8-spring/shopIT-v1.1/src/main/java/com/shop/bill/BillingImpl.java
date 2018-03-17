package com.shop.bill;

import java.util.List;

import com.shop.pm.PriceMatrixImpl_v1;

/*
 * 
 * design & performance issues
 * -----------------------------
 * 
 *  --> tight-coupling b/w dependent & dependency
 *  --> too many duplicate dependency instances created & destructed on eact cart submit
 *  --> unit-testing not possible
 * 
 * 
 * 	 why these issues are occurring in this component?
 * 
 * 	 ==> dependent itself creating it's own dependency
 * 
 * 		soln: don't create dependency in dependent's class  ( IOC )
 * 
 *      How to implement IOC ?
 *      
 *      	using 'Dependency Injection'
 *      
 *      ---------------------------------------------------------
 *      
 *      S.O.L.I.D principles
 *      
 *      ref : https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)
 * 
 *      ---------------------------------------------------------
 * 
 * 
 * 
 */

public class BillingImpl {

	private PriceMatrixImpl_v1 priceMatrix;

	public double geTotalPrice(List<String> cart) {
		priceMatrix = new PriceMatrixImpl_v1();
		double total = 0.0;
		for (String item : cart) {
			total += priceMatrix.getPrice(item);
		}
		return total;
	}

}
