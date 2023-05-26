package com.codecool.shop.persistance.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @Column(columnDefinition="TEXT")
    private String description;
    private BigDecimal price;
    private BigDecimal discountedPrice;
    @ManyToOne
    private Discount discount;
    @ManyToOne
    private ProductCategory productCategory;
    @OneToOne(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER)
    private ProductInventory productInventory;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime createdAt;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime modifiedAt;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime deletedAt;
}
