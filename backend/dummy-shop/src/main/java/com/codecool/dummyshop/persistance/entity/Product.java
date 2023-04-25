package com.codecool.dummyshop.persistance.entity;

import graphql.scalars.datetime.DateTimeScalar;
import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.OffsetDateTime;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Set;

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
