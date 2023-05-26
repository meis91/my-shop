package com.codecool.shop.logic.exeptions;

public class ProductCategoryNotFoundException extends RuntimeException {
    public ProductCategoryNotFoundException(long id){super("Product Category not found. ID = " + id);}
}
