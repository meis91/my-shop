import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
};

export type Brand = {
  __typename?: 'Brand';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Discount = {
  __typename?: 'Discount';
  id: Scalars['ID'];
  name: Scalars['String'];
  percentage: Scalars['Int'];
};

export type DiscountInput = {
  name: Scalars['String'];
  percentage: Scalars['Int'];
};

export type Inventory = {
  __typename?: 'Inventory';
  id: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBrand?: Maybe<Brand>;
  createCategory?: Maybe<Category>;
  createDiscount?: Maybe<Discount>;
  createProduct?: Maybe<Product>;
  deleteCategory?: Maybe<Scalars['ID']>;
  deleteProduct?: Maybe<Scalars['ID']>;
  updateProduct?: Maybe<Product>;
};


export type MutationCreateBrandArgs = {
  name: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String'];
};


export type MutationCreateDiscountArgs = {
  name?: InputMaybe<Scalars['String']>;
  percentage?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateProductArgs = {
  productInput: ProductInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductArgs = {
  productId: Scalars['ID'];
};


export type MutationUpdateProductArgs = {
  productId: Scalars['ID'];
  productInput: ProductInput;
};

export type Product = {
  __typename?: 'Product';
  brand: Brand;
  category: Category;
  description: Scalars['String'];
  discount?: Maybe<Discount>;
  discountedPrice?: Maybe<Scalars['BigDecimal']>;
  id: Scalars['ID'];
  inventory: Inventory;
  name: Scalars['String'];
  price: Scalars['BigDecimal'];
};

export type ProductInput = {
  brandId: Scalars['ID'];
  categoryId: Scalars['ID'];
  description: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['BigDecimal'];
  quantity: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  findAllBrands: Array<Maybe<Brand>>;
  findAllCategories: Array<Maybe<Category>>;
  findAllDiscounts: Array<Maybe<Discount>>;
  findAllProducts: Array<Maybe<Product>>;
  findProduct?: Maybe<Product>;
};


export type QueryFindProductArgs = {
  id: Scalars['ID'];
};

export type CreateProductMutationVariables = Exact<{
  productInput: ProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct?: { __typename?: 'Product', id: string, name: string, description: string, price: any, discountedPrice?: any | null, discount?: { __typename?: 'Discount', id: string, name: string, percentage: number } | null, category: { __typename?: 'Category', id: string, name: string }, inventory: { __typename?: 'Inventory', id: string, quantity: number }, brand: { __typename?: 'Brand', id: string, name: string } } | null };

export type DeleteProductMutationVariables = Exact<{
  productId: Scalars['ID'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct?: string | null };

export type CreateCategoryMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory?: { __typename?: 'Category', id: string, name: string } | null };

export type CreateBrandMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateBrandMutation = { __typename?: 'Mutation', createBrand?: { __typename?: 'Brand', id: string, name: string } | null };

export type CreateDiscountMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  percentage?: InputMaybe<Scalars['Int']>;
}>;


export type CreateDiscountMutation = { __typename?: 'Mutation', createDiscount?: { __typename?: 'Discount', id: string, name: string, percentage: number } | null };

export type FindAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllCategoriesQuery = { __typename?: 'Query', findAllCategories: Array<{ __typename?: 'Category', id: string, name: string } | null> };

export type FindAllBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllBrandsQuery = { __typename?: 'Query', findAllBrands: Array<{ __typename?: 'Brand', id: string, name: string } | null> };

export type FindAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllProductsQuery = { __typename?: 'Query', findAllProducts: Array<{ __typename?: 'Product', id: string, name: string, description: string, price: any, discountedPrice?: any | null, discount?: { __typename?: 'Discount', id: string, name: string, percentage: number } | null, category: { __typename?: 'Category', id: string, name: string }, inventory: { __typename?: 'Inventory', id: string, quantity: number }, brand: { __typename?: 'Brand', id: string, name: string } } | null> };

export type FindProductQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindProductQuery = { __typename?: 'Query', findProduct?: { __typename?: 'Product', id: string, name: string, description: string, price: any, discountedPrice?: any | null, discount?: { __typename?: 'Discount', id: string, name: string, percentage: number } | null, category: { __typename?: 'Category', id: string, name: string }, inventory: { __typename?: 'Inventory', id: string, quantity: number }, brand: { __typename?: 'Brand', id: string, name: string } } | null };


export const CreateProductDocument = gql`
    mutation createProduct($productInput: ProductInput!) {
  createProduct(productInput: $productInput) {
    id
    name
    description
    price
    discountedPrice
    discount {
      id
      name
      percentage
    }
    category {
      id
      name
    }
    inventory {
      id
      quantity
    }
    brand {
      id
      name
    }
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      productInput: // value for 'productInput'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation DeleteProduct($productId: ID!) {
  deleteProduct(productId: $productId)
}
    `;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, options);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const CreateCategoryDocument = gql`
    mutation createCategory($name: String!) {
  createCategory(name: $name) {
    id
    name
  }
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const CreateBrandDocument = gql`
    mutation createBrand($name: String!) {
  createBrand(name: $name) {
    id
    name
  }
}
    `;
export type CreateBrandMutationFn = Apollo.MutationFunction<CreateBrandMutation, CreateBrandMutationVariables>;

/**
 * __useCreateBrandMutation__
 *
 * To run a mutation, you first call `useCreateBrandMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBrandMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBrandMutation, { data, loading, error }] = useCreateBrandMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateBrandMutation(baseOptions?: Apollo.MutationHookOptions<CreateBrandMutation, CreateBrandMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBrandMutation, CreateBrandMutationVariables>(CreateBrandDocument, options);
      }
export type CreateBrandMutationHookResult = ReturnType<typeof useCreateBrandMutation>;
export type CreateBrandMutationResult = Apollo.MutationResult<CreateBrandMutation>;
export type CreateBrandMutationOptions = Apollo.BaseMutationOptions<CreateBrandMutation, CreateBrandMutationVariables>;
export const CreateDiscountDocument = gql`
    mutation createDiscount($name: String, $percentage: Int) {
  createDiscount(name: $name, percentage: $percentage) {
    id
    name
    percentage
  }
}
    `;
export type CreateDiscountMutationFn = Apollo.MutationFunction<CreateDiscountMutation, CreateDiscountMutationVariables>;

/**
 * __useCreateDiscountMutation__
 *
 * To run a mutation, you first call `useCreateDiscountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDiscountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDiscountMutation, { data, loading, error }] = useCreateDiscountMutation({
 *   variables: {
 *      name: // value for 'name'
 *      percentage: // value for 'percentage'
 *   },
 * });
 */
export function useCreateDiscountMutation(baseOptions?: Apollo.MutationHookOptions<CreateDiscountMutation, CreateDiscountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDiscountMutation, CreateDiscountMutationVariables>(CreateDiscountDocument, options);
      }
export type CreateDiscountMutationHookResult = ReturnType<typeof useCreateDiscountMutation>;
export type CreateDiscountMutationResult = Apollo.MutationResult<CreateDiscountMutation>;
export type CreateDiscountMutationOptions = Apollo.BaseMutationOptions<CreateDiscountMutation, CreateDiscountMutationVariables>;
export const FindAllCategoriesDocument = gql`
    query findAllCategories {
  findAllCategories {
    id
    name
  }
}
    `;

/**
 * __useFindAllCategoriesQuery__
 *
 * To run a query within a React component, call `useFindAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
      }
export function useFindAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>(FindAllCategoriesDocument, options);
        }
export type FindAllCategoriesQueryHookResult = ReturnType<typeof useFindAllCategoriesQuery>;
export type FindAllCategoriesLazyQueryHookResult = ReturnType<typeof useFindAllCategoriesLazyQuery>;
export type FindAllCategoriesQueryResult = Apollo.QueryResult<FindAllCategoriesQuery, FindAllCategoriesQueryVariables>;
export const FindAllBrandsDocument = gql`
    query findAllBrands {
  findAllBrands {
    id
    name
  }
}
    `;

/**
 * __useFindAllBrandsQuery__
 *
 * To run a query within a React component, call `useFindAllBrandsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllBrandsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllBrandsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllBrandsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllBrandsQuery, FindAllBrandsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllBrandsQuery, FindAllBrandsQueryVariables>(FindAllBrandsDocument, options);
      }
export function useFindAllBrandsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllBrandsQuery, FindAllBrandsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllBrandsQuery, FindAllBrandsQueryVariables>(FindAllBrandsDocument, options);
        }
export type FindAllBrandsQueryHookResult = ReturnType<typeof useFindAllBrandsQuery>;
export type FindAllBrandsLazyQueryHookResult = ReturnType<typeof useFindAllBrandsLazyQuery>;
export type FindAllBrandsQueryResult = Apollo.QueryResult<FindAllBrandsQuery, FindAllBrandsQueryVariables>;
export const FindAllProductsDocument = gql`
    query findAllProducts {
  findAllProducts {
    id
    name
    description
    price
    discountedPrice
    discount {
      id
      name
      percentage
    }
    category {
      id
      name
    }
    inventory {
      id
      quantity
    }
    brand {
      id
      name
    }
  }
}
    `;

/**
 * __useFindAllProductsQuery__
 *
 * To run a query within a React component, call `useFindAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllProductsQuery, FindAllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllProductsQuery, FindAllProductsQueryVariables>(FindAllProductsDocument, options);
      }
export function useFindAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllProductsQuery, FindAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllProductsQuery, FindAllProductsQueryVariables>(FindAllProductsDocument, options);
        }
export type FindAllProductsQueryHookResult = ReturnType<typeof useFindAllProductsQuery>;
export type FindAllProductsLazyQueryHookResult = ReturnType<typeof useFindAllProductsLazyQuery>;
export type FindAllProductsQueryResult = Apollo.QueryResult<FindAllProductsQuery, FindAllProductsQueryVariables>;
export const FindProductDocument = gql`
    query findProduct($id: ID!) {
  findProduct(id: $id) {
    id
    name
    description
    price
    discountedPrice
    discount {
      id
      name
      percentage
    }
    category {
      id
      name
    }
    inventory {
      id
      quantity
    }
    brand {
      id
      name
    }
  }
}
    `;

/**
 * __useFindProductQuery__
 *
 * To run a query within a React component, call `useFindProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindProductQuery(baseOptions: Apollo.QueryHookOptions<FindProductQuery, FindProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProductQuery, FindProductQueryVariables>(FindProductDocument, options);
      }
export function useFindProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProductQuery, FindProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProductQuery, FindProductQueryVariables>(FindProductDocument, options);
        }
export type FindProductQueryHookResult = ReturnType<typeof useFindProductQuery>;
export type FindProductLazyQueryHookResult = ReturnType<typeof useFindProductLazyQuery>;
export type FindProductQueryResult = Apollo.QueryResult<FindProductQuery, FindProductQueryVariables>;