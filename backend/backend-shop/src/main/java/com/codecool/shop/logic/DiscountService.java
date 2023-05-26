package com.codecool.shop.logic;

import com.codecool.shop.persistance.entity.Discount;
import com.codecool.shop.persistance.repositiory.DiscountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class DiscountService {
    private final DiscountRepository discountRepository;

    public Discount createDiscount(String name, int percentage){
        System.out.println("name = " + name);
        System.out.println("percentage = " + percentage);
        Discount discount = new Discount(name, percentage);
        return discountRepository.save(discount);
    }

    public Optional<Discount> findById(long id){
        return discountRepository.findById(id);
    }


}
