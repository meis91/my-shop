package com.codecool.dummyshop.logic;

import com.codecool.dummyshop.persistance.entity.ProductCategory;
import com.codecool.dummyshop.persistance.repositiory.ProductCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductCategoryService {
    private final ProductCategoryRepository productCategoryRepository;

    public ProductCategory create(String name){
        ProductCategory productCategory = new ProductCategory(name);
        return productCategoryRepository.save(productCategory);
    }

    public List<ProductCategory> allProductCategories(){
        return productCategoryRepository.findAll();
    }

    public Optional<ProductCategory> findById(long id){
        return productCategoryRepository.findById(id);
    }
}
