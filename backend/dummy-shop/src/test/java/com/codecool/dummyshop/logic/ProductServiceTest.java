package com.codecool.dummyshop.logic;

import com.codecool.dummyshop.persistance.entity.Product;
import com.codecool.dummyshop.persistance.repositiory.ProductRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;

class ProductServiceTest {
    /*ProductRepository productRepository = mock(ProductRepository.class);
    ProductService productService = new ProductService(productRepository);
    Product product = new Product();

    @Test
    void create() {

        when(productRepository.save(product)).thenReturn(product);

        Product actual = productService.create(product);

        Assertions.assertEquals(actual, product);

        verify(productRepository).save(product);
    }

    @Test
    void findById() {
    }

    @Test
    void updatePrice() {
    }

    @Test
    void delete() {
        productService.create(product);
        productService.delete(product);



        verify(productRepository).delete(product);
    }

    @Test
    void allProducts() {
        productService.findAllProducts();

        verify(productRepository).findAll();
    }

     */
}