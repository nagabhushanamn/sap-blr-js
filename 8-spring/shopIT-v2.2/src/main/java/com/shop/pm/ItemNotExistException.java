package com.shop.pm;

public class ItemNotExistException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ItemNotExistException(String message) {
		super(message);
	}
}
