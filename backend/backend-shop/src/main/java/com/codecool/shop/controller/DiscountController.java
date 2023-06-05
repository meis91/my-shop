package com.codecool.shop.controller;

import com.codecool.shop.logic.DiscountService;
import com.codecool.shop.persistance.entity.Discount;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class DiscountController {
    private final DiscountService discountService;

    @MutationMapping
    public Discount createDiscount(@Argument String name, @Argument int percentage){
        return discountService.createDiscount(name, percentage);
    }

    @QueryMapping
    public List<Discount> findAllDiscounts(){
        return discountService.findAll();
    }

}
