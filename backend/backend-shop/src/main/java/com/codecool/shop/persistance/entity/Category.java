package com.codecool.shop.persistance.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Category {
    @Id
    @GeneratedValue
    private long id;
    private String name;
    @ManyToMany
    private Set<Product> products;

    public Category(String name) {
        this.name = name;
    }

}
