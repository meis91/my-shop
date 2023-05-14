package com.codecool.dummyshop.controller;

import com.codecool.dummyshop.logic.ProductCategoryService;
import com.codecool.dummyshop.persistance.entity.ProductCategory;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class ProductCategoryController {
    private final ProductCategoryService productCategoryService;
    @MutationMapping
    public ProductCategory createProductCategory(@Argument String name){
        return productCategoryService.createProductCategory(name);
    }

    @QueryMapping
    public List<ProductCategory> findAllProductCategories(){
        return productCategoryService.allProductCategories();
    }

    @MutationMapping
    public long deleteProductCategory(@Argument long id){
        return productCategoryService.delete(id);
    }


    @PostConstruct
    private void populate(){
        createProductCategory("Tea");
        createProductCategory("Food");
    }
}
