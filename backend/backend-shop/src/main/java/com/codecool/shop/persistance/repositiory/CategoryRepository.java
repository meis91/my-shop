package com.codecool.shop.persistance.repositiory;

import com.codecool.shop.persistance.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Override
    public Category saveAndFlush(Category Category);
}
