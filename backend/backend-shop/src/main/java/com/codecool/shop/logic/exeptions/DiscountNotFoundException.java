package com.codecool.shop.logic.exeptions;

public class DiscountNotFoundException extends RuntimeException{
    public DiscountNotFoundException(long id){super("Discount not found. ID = " + id);}
}
