package com.codecool.shop.controller.input;

import com.codecool.shop.persistance.entity.Product;
import com.codecool.shop.persistance.entity.Inventory;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class ProductInput {
    private String name;
    private String description;
    private BigDecimal price;
    private long categoryId;
    private long brandId;
    private int quantity;
    private long discountId;

    public Product getProductEntity(){
        Product product = new Product();
        product.setName(this.name);
        product.setDescription(this.description);
        product.setPrice(this.price);

        return product;
    }

    public Inventory getProductInventoryEntity(){
        Inventory inventory = new Inventory();
        inventory.setQuantity(this.quantity);
        return inventory;
    }
}
