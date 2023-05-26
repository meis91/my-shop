package com.codecool.shop.logic;

import com.codecool.shop.logic.exeptions.DiscountNotFoundException;
import com.codecool.shop.logic.exeptions.ProductNotFoundException;
import com.codecool.shop.logic.util.DiscountCalculation;
import com.codecool.shop.persistance.entity.Discount;
import com.codecool.shop.persistance.entity.Product;
import com.codecool.shop.persistance.repositiory.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;
    private final DiscountService discountService;


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

    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    public Product setProductDiscount(long productId, long discountId) throws Exception {
        Optional<Product> productOptional = findById(productId);
        Optional<Discount> discountOptional = discountService.findById(discountId);
        if(productOptional.isPresent()){
            Product product = productOptional.get();
            if(discountOptional.isPresent()){
                Discount discount = discountOptional.get();
                BigDecimal price = product.getPrice();
                int discountPercentage = discount.getPercentage();
                product.setDiscount(discount);
                product.setDiscountedPrice(DiscountCalculation.decreasePercentage(price, discountPercentage));
                return productRepository.save(productOptional.get());
            } else {
                throw new DiscountNotFoundException(discountId);
            }
        } else {
            throw new ProductNotFoundException(productId);
        }
    }
}
