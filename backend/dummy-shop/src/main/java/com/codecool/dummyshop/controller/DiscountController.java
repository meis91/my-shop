package com.codecool.dummyshop.controller;

import com.codecool.dummyshop.logic.DiscountService;
import com.codecool.dummyshop.persistance.entity.Discount;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class DiscountController {
    private final DiscountService discountService;

    @MutationMapping
    public Discount createDiscount(@Argument String name, @Argument int percentage){
        return discountService.createDiscount(name, percentage);
    }
}
