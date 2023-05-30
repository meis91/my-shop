package com.codecool.shop.controller;

import com.codecool.shop.controller.input.ProductInput;
import com.codecool.shop.logic.ProductCategoryService;
import com.codecool.shop.logic.ProductService;
import com.codecool.shop.logic.exeptions.ProductCategoryNotFoundException;
import com.codecool.shop.persistance.entity.Product;
import com.codecool.shop.persistance.entity.ProductCategory;
import com.codecool.shop.persistance.entity.ProductInventory;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    private final ProductCategoryService productCategoryService;
    @MutationMapping
    public Product createProduct(@Argument(name = "productInput") ProductInput productInput){
        System.out.println("productInput = " + productInput);
        Product product = productInput.getProductEntity();
        ProductInventory productInventory = productInput.getProductInventoryEntity();
        product.setProductInventory(productInventory);
        long productCategoryId = productInput.getProductCategoryId();
        Optional<ProductCategory> productCategory = productCategoryService.findById(productCategoryId);
        if(productCategory.isPresent()){
            product.setProductCategory(productCategory.get());
        } else {
            throw new ProductCategoryNotFoundException(productCategoryId);
        }
        return productService.create(product);
    }

    @QueryMapping
    public List<Product> findAllProducts(){
        return productService.findAllProducts();
    }

    @QueryMapping
    public Product findProduct(@Argument long id){
        return productService.findProduct(id);
    }

    @MutationMapping
    public Product setProductDiscount(@Argument long productId , @Argument long discountId) throws Exception {
        return productService.setProductDiscount(productId, discountId);
    }

    @MutationMapping
    public long deleteProduct(@Argument long productId) {
        return productService.deleteProduct(productId);
    }
}


