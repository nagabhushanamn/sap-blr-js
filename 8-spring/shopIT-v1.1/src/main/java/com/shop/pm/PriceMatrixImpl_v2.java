package com.shop.pm;

public class PriceMatrixImpl_v2 {
	
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
