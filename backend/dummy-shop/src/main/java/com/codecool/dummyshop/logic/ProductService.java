package com.codecool.dummyshop.logic;

import com.codecool.dummyshop.persistance.entity.Product;
import com.codecool.dummyshop.persistance.repositiory.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public Product create(Product product){
        return productRepository.save(product);
    }

    public Optional<Product> findById(long id){
        return productRepository.findById(id);
    }

    public Product updatePrice(Product product, BigDecimal newPrice){
        product.setPrice(newPrice);
        return productRepository.save(product);
    }

    public Product delete(Product product){
        productRepository.delete(product);
        return product;
    }

    public List<Product> allProducts() {
        return productRepository.findAll();
    }
}
