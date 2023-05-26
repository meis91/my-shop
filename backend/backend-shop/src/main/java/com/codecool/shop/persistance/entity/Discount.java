package com.codecool.shop.persistance.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Discount {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private int percentage;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime createdAt;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime modifiedAt;
    @Column(columnDefinition = "TIMESTAMP")
    private LocalDateTime deletedAt;

    public Discount(String name, int percentage) {
        this.name = name;
        this.percentage = percentage;
        this.createdAt = LocalDateTime.now();
    }
}
