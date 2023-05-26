package com.codecool.shop.logic.exeptions;

public class ProductNotFoundException extends RuntimeException{
    public ProductNotFoundException(long id){super("Product not found. ID = " + id);}
}
