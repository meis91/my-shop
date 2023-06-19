package com.codecool.shop.controller.dto;

import com.codecool.shop.persistance.entity.Brand;
import com.codecool.shop.persistance.entity.Category;
import com.codecool.shop.persistance.entity.Inventory;
import lombok.Data;

import java.math.BigDecimal;
@Data
public class ProductInputDto {
    private String name;
    private String description;
    private BigDecimal price;
    private Category category;
    private Brand brand;
    private Inventory inventory;
    private long discountId;

    @Override
    public String toString() {
        return "ProductInputDto{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", inventory=" + inventory +
                ", discountId=" + discountId +
                '}';
    }
}
