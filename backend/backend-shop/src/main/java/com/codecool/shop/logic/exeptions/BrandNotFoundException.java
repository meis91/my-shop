package com.codecool.shop.logic.exeptions;

public class BrandNotFoundException extends RuntimeException{

    public BrandNotFoundException(long id){super("Brand not found. ID = " + id);}
}
