package com.codecool.dummyshop.logic;

import com.codecool.dummyshop.persistance.entity.ProductCategory;
import com.codecool.dummyshop.persistance.repositiory.ProductCategoryRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ProductCategoryServiceTest {
    ProductCategoryRepository productCategoryRepository = mock(ProductCategoryRepository.class);
    ProductCategoryService productCategoryService = new ProductCategoryService(productCategoryRepository);

    @Test
    void create() {
        ProductCategory productCategory = new ProductCategory("testName");
        when(productCategoryRepository.save(productCategory)).thenReturn( new ProductCategory());

       /* ProductCategory actual = productCategoryService.create("testName");*/

        /*Assertions.assertEquals(actual.getName(), productCategory.getName());*/
        /*Assertions.assertNotNull(actual.getId());*/
        verify(productCategoryRepository).save(productCategory);
    }

    @Test
    void allProductCategories() {
    }

    @Test
    void findById() {
    }
}