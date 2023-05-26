package com.codecool.shop.persistance.repositiory;

import com.codecool.shop.persistance.entity.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {
    @Override
    public ProductCategory saveAndFlush(ProductCategory productCategory);
}
