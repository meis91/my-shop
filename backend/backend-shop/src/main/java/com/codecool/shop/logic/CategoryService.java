package com.codecool.shop.logic;

import com.codecool.shop.logic.exeptions.CategoryNotFoundException;
import com.codecool.shop.persistance.entity.Category;
import com.codecool.shop.persistance.repositiory.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public Category create(String name){
        Category category = new Category(name);
        return categoryRepository.saveAndFlush(category);
    }

    public List<Category> findAll(){
        return categoryRepository.findAll();
    }

    public Optional<Category> findById(long id){
        return categoryRepository.findById(id);
    }



    public long delete(long id) {
        Optional<Category> productCategory = findById(id);
        if (productCategory.isPresent()){
            categoryRepository.delete(productCategory.get());
            return productCategory.get().getId();
        }else {
            throw new CategoryNotFoundException(id);
        }
    }
}
