package com.shop;

import java.util.Arrays;
import java.util.List;

import com.shop.bill.BillingImpl;

public class App {
	
	public static void main(String[] args) {
		
		//-------------------------------------------------
			BillingImpl billing=new BillingImpl();
		//-------------------------------------------------
		
		
		//-------------------------------------------------
		
		List<String> cart=Arrays.asList("123","321");
		double totalPrice=billing.geTotalPrice(cart);
		System.out.println("Total : "+totalPrice +" only.");
		
		//-------------------------------------------------
		
		
		//-------------------------------------------------
		
		
		//-------------------------------------------------
		
	}

}
