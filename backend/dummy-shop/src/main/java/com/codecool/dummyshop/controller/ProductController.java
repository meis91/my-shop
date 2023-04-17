package com.codecool.dummyshop.controller;

import com.codecool.dummyshop.logic.ProductService;
import com.codecool.dummyshop.persistance.entity.Product;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

import java.math.BigDecimal;

@Controller
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    @MutationMapping
    public Product createProduct(@Argument String name, @Argument String description, @Argument BigDecimal price){
        return
    }
}
