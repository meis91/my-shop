package com.codecool.shop.controller;


import com.codecool.shop.logic.CategoryService;
import com.codecool.shop.persistance.entity.Category;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @QueryMapping
    public List<Category> findAllCategories() {
        return categoryService.findAll();
    }

    @MutationMapping
    public Category createCategory(@Argument String name) {
        return categoryService.create(name);
    }

    @MutationMapping
    public long deleteCategory(@Argument long id) {
        return categoryService.delete(id);
    }




}