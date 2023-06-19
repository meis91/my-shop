package com.codecool.shop.controller;

import com.codecool.shop.controller.dto.ProductInputDto;
import com.codecool.shop.controller.input.ProductInput;
import com.codecool.shop.logic.CategoryService;
import com.codecool.shop.logic.ProductService;
import com.codecool.shop.logic.exeptions.CategoryNotFoundException;
import com.codecool.shop.persistance.entity.Product;
import com.codecool.shop.persistance.entity.Category;
import com.codecool.shop.persistance.entity.Inventory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    private final CategoryService categoryService;
    @MutationMapping
    public Product createProduct(@Argument(name = "productInput") ProductInputDto productInput){
        return productService.create(productInput);
    }

    @QueryMapping
    public List<Product> findAllProducts(){
        return productService.findAllProducts();
    }

    @QueryMapping
    public Page<Product> findAllProductsPaged(@Argument int page, @Argument int size){
        System.out.println("page = " + page);
        System.out.println("size = " + size);
        PageRequest pageRequest = PageRequest.of(page, size);
        return productService.findAllProductsPaginated(pageRequest);
    }

    @QueryMapping
    public Product findProduct(@Argument long id){
        return productService.findProduct(id);
    }


    @MutationMapping
    public Product editProduct(@Argument(name = "productId") long productId , @Argument(name = "productInput") ProductInput productInput){
        return productService.edit(productId, productInput);
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


