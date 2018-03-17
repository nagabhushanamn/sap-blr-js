package com.shop.pm;

public class PriceMatrixImpl_v1 implements PriceMatrix{
	
	public PriceMatrixImpl_v1() {
		System.out.println("PriceMatrixImpl_v1 instance created");
	}
	
	public double getPrice(String item) {
		if(item.equals("123")) {
			return 100.0;
		}
		if(item.equals("321")) {
			return 200.00;
		}
		throw new ItemNotExistException(item + "item not exist");
	}

}
