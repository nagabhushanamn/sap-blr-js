package com.shop;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.shop.bill.Billing;
import com.shop.bill.BillingImpl;
import com.shop.pm.PriceMatrix;
import com.shop.pm.PriceMatrixImpl_v1;
import com.shop.pm.PriceMatrixImpl_v2;

public class App {

	public static void main(String[] args) {

		// -------------------------------------------------
		// PriceMatrix priceMatrixv1 = new PriceMatrixImpl_v1();
		// PriceMatrix priceMatrixV2 = new PriceMatrixImpl_v2();
		// BillingImpl billing = new BillingImpl(priceMatrixV2);
		
		ConfigurableApplicationContext applicationContext=null;
		applicationContext=new ClassPathXmlApplicationContext("spring.xml");
		System.out.println();
		// -------------------------------------------------

		// -------------------------------------------------
		Billing billing=(Billing)applicationContext.getBean("billComp1");
		List<String> cart = Arrays.asList("123", "321");
		double totalPrice = billing.geTotalPrice(cart);
		System.out.println("Total : " + totalPrice + " only.");
		System.out.println();
		// -------------------------------------------------

		// -------------------------------------------------
		applicationContext.close();
		// -------------------------------------------------

	}

}
