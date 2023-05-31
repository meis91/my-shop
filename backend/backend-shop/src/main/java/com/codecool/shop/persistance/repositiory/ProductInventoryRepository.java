package com.codecool.shop.persistance.repositiory;

import com.codecool.shop.persistance.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductInventoryRepository extends JpaRepository<Inventory, Long> {
}
