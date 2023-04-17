package com.codecool.dummyshop.persistance.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@NoArgsConstructor
@Builder
@AllArgsConstructor
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    @Column(columnDefinition="TEXT")
    private String description;
    private BigDecimal price;
    @ManyToMany
    private Set<ProductCategory> productCategories;
    @OneToOne
    private ProductInventory productInventory;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime createdAt;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime modifiedAt;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime deletedAt;
}
