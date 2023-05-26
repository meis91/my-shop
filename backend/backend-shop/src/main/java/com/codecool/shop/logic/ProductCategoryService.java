package com.codecool.shop.logic;

import com.codecool.shop.logic.exeptions.ProductCategoryNotFoundException;
import com.codecool.shop.persistance.entity.ProductCategory;
import com.codecool.shop.persistance.repositiory.ProductCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductCategoryService {
    private final ProductCategoryRepository productCategoryRepository;

    public ProductCategory createProductCategory(String name){
        ProductCategory productCategory = new ProductCategory(name);
        return productCategoryRepository.saveAndFlush(productCategory);
    }

    public List<ProductCategory> allProductCategories(){
        return productCategoryRepository.findAll();
    }

    public Optional<ProductCategory> findById(long id){
        return productCategoryRepository.findById(id);
    }



    public long delete(long id) {
        Optional<ProductCategory> productCategory = findById(id);
        if (productCategory.isPresent()){
            productCategoryRepository.delete(productCategory.get());
            return productCategory.get().getId();
        }else {
            throw new ProductCategoryNotFoundException(id);
        }
    }
}
