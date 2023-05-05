package com.codecool.dummyshop.logic;

import com.codecool.dummyshop.logic.util.DiscountCalculation;
import com.codecool.dummyshop.persistance.entity.Discount;
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
        if(productOptional.isPresent() && discountOptional.isPresent()){
            BigDecimal price = productOptional.get().getPrice();
            int discountPercentage = discountOptional.get().getPercentage();
            productOptional.get().setDiscountedPrice(DiscountCalculation.decreasePercentage(price, discountPercentage));
            return productRepository.save(productOptional.get());
        } else {
            throw new Exception("Product or Discount not found");
        }
    }
}
