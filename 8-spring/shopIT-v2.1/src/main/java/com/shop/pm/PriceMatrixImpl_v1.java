package com.shop.pm;

public class PriceMatrixImpl_v1 implements PriceMatrix{
	
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
