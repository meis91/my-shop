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

    public Category findById(long id){
        Optional<Category>category=  categoryRepository.findById(id);
        if (category.isPresent()){
            return category.get();
        }else {
            throw new CategoryNotFoundException(id);
        }
    }



    public long delete(long id) {
        Category category = findById(id);
        categoryRepository.delete(category);
        return id;
    }
}
