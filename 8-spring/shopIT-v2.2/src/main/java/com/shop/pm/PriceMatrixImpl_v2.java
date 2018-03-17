package com.shop.pm;

public class PriceMatrixImpl_v2 implements PriceMatrix {
	

	public PriceMatrixImpl_v2() {
		System.out.println("PriceMatrixImpl_v2 instance created");
	}
	
	public double getPrice(String item) {
		if(item.equals("123")) {
			return 200.0;
		}
		if(item.equals("321")) {
			return 300.00;
		}
		throw new ItemNotExistException(item + "item not exist");
	}

}
