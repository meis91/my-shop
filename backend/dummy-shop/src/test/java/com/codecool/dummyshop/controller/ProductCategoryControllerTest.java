package com.codecool.dummyshop.controller;

import com.codecool.dummyshop.logic.ProductCategoryService;
import com.codecool.dummyshop.persistance.entity.ProductCategory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.graphql.GraphQlTest;
import org.springframework.context.annotation.Import;
import org.springframework.graphql.test.tester.GraphQlTester;

import static org.junit.jupiter.api.Assertions.*;
@Import(ProductCategoryService.class)
@GraphQlTest(ProductCategoryController.class)
class ProductCategoryControllerTest {
    @Autowired
    GraphQlTester graphQlTester;
    @Test
    void testFindAllCategoriesShouldReturnAllCategories(){

        // language=GraphQL
        String document = """
                query {
                    findAllProductCategories {
                                 id
                                 name
                                 createdAt   
                    }
                }
                """;

        graphQlTester.document(document)
                .execute()
                .path("findAllProductCategories")
                .entityList(ProductCategory.class);
    }

}