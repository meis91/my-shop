package com.codecool.shop.controller.input;

import com.codecool.shop.persistance.entity.Product;
import com.codecool.shop.persistance.entity.ProductInventory;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
public class ProductInput {
    private String name;
    private String description;
    private BigDecimal price;
    private long productCategoryId;
    private int quantity;

    public Product getProductEntity(){
        Product product = new Product();
        product.setName(this.name);
        product.setDescription(this.description);
        product.setPrice(this.price);
        product.setCreatedAt(LocalDateTime.now());
        return product;
    }

    public ProductInventory getProductInventoryEntity(){
        ProductInventory productInventory = new ProductInventory();
        productInventory.setQuantity(this.quantity);
        productInventory.setCreatedAt(LocalDateTime.now());
        return productInventory;
    }
}
