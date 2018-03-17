package shopIT;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;

import com.shop.pm.ItemNotExistException;
import com.shop.pm.PriceMatrixImpl_v1;

public class PriceMatrixTest {

	private PriceMatrixImpl_v1 priceMatrix;

	@Before
	public void setUp() {
		priceMatrix = new PriceMatrixImpl_v1();
	}

	@Test
	public void positiveTest() {
		double actual = priceMatrix.getPrice("123");
		assertEquals(100.0, actual, 0.1);
	}
	
	@Test(expected=ItemNotExistException.class)
	public void negativeTest() {
		priceMatrix.getPrice("111");
	}

}










