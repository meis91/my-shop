package com.codecool.shop.logic.exeptions;

public class CategoryNotFoundException extends RuntimeException {
    public CategoryNotFoundException(long id){super("Product Category not found. ID = " + id);}
}
