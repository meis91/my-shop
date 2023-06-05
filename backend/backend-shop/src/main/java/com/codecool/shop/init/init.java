package com.codecool.shop.init;

import com.codecool.shop.logic.util.DiscountCalculation;
import com.codecool.shop.persistance.entity.Discount;
import com.codecool.shop.persistance.entity.Product;
import com.codecool.shop.persistance.repositiory.ProductRepository;
import com.github.javafaker.Faker;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
@Order(1)
public class init implements ApplicationRunner {
    private final ProductRepository productRepository;


    @Override
    public void run(ApplicationArguments args) throws Exception {
        System.out.println("doingpostConstruct");
        List<Product> products = productRepository.findAll();
        System.out.println("products = " + products.size());
        products.stream()
                .filter(product -> product.getDiscount() != null)
                .peek(product -> product.setDiscountedPrice(DiscountCalculation.decreasePercentage(product.getPrice(), product.getDiscount().getPercentage())))
                .forEach(productRepository::save);
    }
    /*@PostConstruct
    public void setDiscountedPrice(){
        System.out.println("doingpostConstruct");
        List<Product> products = productRepository.findAll();
        System.out.println("products = " + products.size());
        List<Product> discountedProducts = products.stream()
                .filter(product -> product.getDiscount() != null)
                *//*.peek(product -> product.setDiscountedPrice(DiscountCalculation.decreasePercentage(product.getPrice(), product.getDiscount().getPercentage())))*//*
                .toList();
        System.out.println("discountedProducts = " + discountedProducts);
        productRepository.saveAll(discountedProducts);
    }*/


}
