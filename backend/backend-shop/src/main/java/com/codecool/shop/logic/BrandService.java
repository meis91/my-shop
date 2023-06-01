package com.codecool.shop.logic;

import com.codecool.shop.controller.BrandController;
import com.codecool.shop.logic.exeptions.BrandNotFoundException;
import com.codecool.shop.persistance.entity.Brand;
import com.codecool.shop.persistance.repositiory.BrandRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class BrandService {
    private final BrandRepository brandRepository;

    public List<Brand> findAllBrands() {
        return brandRepository.findAll();
    }

    public Brand createBrand(String name) {
        Brand brand = new Brand(name);
        return brandRepository.saveAndFlush(brand);
    }

    public Brand findById(long brandId){
        Optional<Brand> brand = brandRepository.findById(brandId);
        if(brand.isPresent()){
            return brand.get();
        } else {
            throw new BrandNotFoundException(brandId);
        }
    }
}
