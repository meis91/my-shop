package com.codecool.dummyshop.logic.util;

import lombok.experimental.UtilityClass;

import java.math.BigDecimal;

@UtilityClass
public class DiscountCalculation {
    public static BigDecimal decreasePercentage(BigDecimal price, int percentage){
        BigDecimal decreasePercentage = new BigDecimal(percentage).divide(new BigDecimal("100")); // convert input to decimal
        BigDecimal decreaseAmount = price.multiply(decreasePercentage);
        return price.subtract(decreaseAmount);

    }
}
