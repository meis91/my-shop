package com.codecool.shop.persistance.repositiory;

import com.codecool.shop.persistance.entity.Brand;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Long> {
}
