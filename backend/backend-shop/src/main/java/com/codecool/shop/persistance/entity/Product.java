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
    @Enumerated(EnumType.ORDINAL)
    private StatusType statusType;
    private BigDecimal price;
    private BigDecimal discountedPrice;
    @ManyToOne
    private Discount discount;
    @ManyToOne
    private Category category;
    @ManyToOne
    private Brand brand;
    @OneToOne(cascade = {CascadeType.ALL}, fetch = FetchType.EAGER)
    private Inventory inventory;
}
