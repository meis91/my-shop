package com.codecool.dummyshop.logic.exeptions;

public class DiscountNotFoundException extends RuntimeException{
    public DiscountNotFoundException(long id){super("Discount not found. ID = " + id);}
}
