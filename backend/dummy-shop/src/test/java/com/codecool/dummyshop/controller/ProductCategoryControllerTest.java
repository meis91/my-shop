package com.codecool.dummyshop.controller;

import com.codecool.dummyshop.config.GraphQlConfig;
import com.codecool.dummyshop.logic.ProductCategoryService;
import com.codecool.dummyshop.persistance.entity.ProductCategory;
import com.codecool.dummyshop.persistance.repositiory.ProductCategoryRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.graphql.GraphQlTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.graphql.test.tester.GraphQlTester;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

@GraphQlTest(ProductCategoryController.class)
@Import({ProductCategoryService.class, GraphQlConfig.class})

class ProductCategoryControllerTest {

    @Autowired
    GraphQlTester graphQlTester;

    @MockBean
    ProductCategoryService productCategoryService;
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
                .entityList(ProductCategory.class)
                .hasSize(0);

        verify(productCategoryService).allProductCategories();
    }


    
    @Test
    void testCreateNewCategory(){
        // language=GraphQL
        String document = """
            mutation createProductCategory($name: String){
                createProductCategory(name: $name){
                    id
                    name
                    createdAt
                }
            }
        """;
        graphQlTester.document(document)
                .variable("name", "Test")
                .execute()
                .path("createProductCategory")
                .entity(ProductCategory.class)
                .satisfies(productCategory -> {

                    assertEquals("Test", productCategory.getName());

                });
    }
}