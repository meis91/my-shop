package com.codecool.shop.controller;

import com.codecool.shop.logic.BrandService;
import com.codecool.shop.persistance.entity.Brand;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class BrandController {
    private final BrandService brandService;

    @QueryMapping
    public List<Brand> findAllBrands(){
        return brandService.findAll();
    }

    @MutationMapping
    public Brand createBrand(@Argument String name){
        return brandService.createBrand(name);
    }


}
