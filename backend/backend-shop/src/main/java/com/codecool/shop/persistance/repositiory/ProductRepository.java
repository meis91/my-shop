package com.codecool.shop.persistance.repositiory;

import com.codecool.shop.persistance.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {


    Product save(Product product);

    List<Product> findAll();
    Page<Product> findAll(Pageable pageable);

    void deleteById(long productId);

    Optional<Product> findById(long id);


}
