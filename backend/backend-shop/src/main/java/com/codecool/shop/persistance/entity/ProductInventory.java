package com.codecool.shop.persistance.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class ProductInventory {
    @Id
    @GeneratedValue
    private long id;
    private int quantity;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime createdAt;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime modifiedAt;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime deletedAt;
}
