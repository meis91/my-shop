package com.codecool.dummyshop.logic;

import com.codecool.dummyshop.persistance.entity.Discount;
import com.codecool.dummyshop.persistance.repositiory.DiscountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class DiscountService {
    private final DiscountRepository discountRepository;

    public Discount createDiscount(String name, int percentage){
        Discount discount = new Discount(name, percentage);
        return discountRepository.save(discount);
    }

    public Optional<Discount> findById(long id){
        return discountRepository.findById(id);
    }


}
