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
  LocalDateTime: any;
};

export type Discount = {
  __typename?: 'Discount';
  createdAt?: Maybe<Scalars['LocalDateTime']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  percentage?: Maybe<Scalars['Int']>;
};

export type DiscountInput = {
  name: Scalars['String'];
  percentage: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDiscount?: Maybe<Discount>;
  createProduct?: Maybe<Product>;
  createProductCategory?: Maybe<ProductCategory>;
  deleteProductCategory?: Maybe<Scalars['ID']>;
  setProductDiscount?: Maybe<Product>;
};


export type MutationCreateDiscountArgs = {
  name?: InputMaybe<Scalars['String']>;
  percentage?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateProductArgs = {
  productInput?: InputMaybe<ProductInput>;
};


export type MutationCreateProductCategoryArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteProductCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationSetProductDiscountArgs = {
  discountId?: InputMaybe<Scalars['ID']>;
  productId: Scalars['ID'];
};

export type Product = {
  __typename?: 'Product';
  createdAt?: Maybe<Scalars['LocalDateTime']>;
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Discount>;
  discountedPrice?: Maybe<Scalars['BigDecimal']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['BigDecimal'];
  productCategory: ProductCategory;
  productInventory: ProductInventory;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  createdAt?: Maybe<Scalars['LocalDateTime']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ProductInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['BigDecimal']>;
  productCategoryId?: InputMaybe<Scalars['ID']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type ProductInventory = {
  __typename?: 'ProductInventory';
  createdAt?: Maybe<Scalars['LocalDateTime']>;
  id: Scalars['ID'];
  quantity?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  findAllProductCategories?: Maybe<Array<Maybe<ProductCategory>>>;
  findAllProducts?: Maybe<Array<Maybe<Product>>>;
};

export type CreateProductMutationVariables = Exact<{
  productInput?: InputMaybe<ProductInput>;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct?: { __typename?: 'Product', id: string, name: string } | null };

export type CreateProductCategoryMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
}>;


export type CreateProductCategoryMutation = { __typename?: 'Mutation', createProductCategory?: { __typename?: 'ProductCategory', id: string, name?: string | null } | null };

export type CreateDiscountMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  percentage?: InputMaybe<Scalars['Int']>;
}>;


export type CreateDiscountMutation = { __typename?: 'Mutation', createDiscount?: { __typename?: 'Discount', id: string, name?: string | null, percentage?: number | null } | null };

export type FindAllProductCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllProductCategoriesQuery = { __typename?: 'Query', findAllProductCategories?: Array<{ __typename?: 'ProductCategory', id: string, name?: string | null } | null> | null };

export type FindAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllProductsQuery = { __typename?: 'Query', findAllProducts?: Array<{ __typename?: 'Product', id: string, name: string, description?: string | null, price: any, discountedPrice?: any | null, createdAt?: any | null, discount?: { __typename?: 'Discount', id: string, name?: string | null, percentage?: number | null } | null, productCategory: { __typename?: 'ProductCategory', id: string, name?: string | null }, productInventory: { __typename?: 'ProductInventory', id: string, quantity?: number | null } } | null> | null };


export const CreateProductDocument = gql`
    mutation createProduct($productInput: ProductInput) {
  createProduct(productInput: $productInput) {
    id
    name
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
export const CreateProductCategoryDocument = gql`
    mutation createProductCategory($name: String) {
  createProductCategory(name: $name) {
    id
    name
  }
}
    `;
export type CreateProductCategoryMutationFn = Apollo.MutationFunction<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>;

/**
 * __useCreateProductCategoryMutation__
 *
 * To run a mutation, you first call `useCreateProductCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductCategoryMutation, { data, loading, error }] = useCreateProductCategoryMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateProductCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>(CreateProductCategoryDocument, options);
      }
export type CreateProductCategoryMutationHookResult = ReturnType<typeof useCreateProductCategoryMutation>;
export type CreateProductCategoryMutationResult = Apollo.MutationResult<CreateProductCategoryMutation>;
export type CreateProductCategoryMutationOptions = Apollo.BaseMutationOptions<CreateProductCategoryMutation, CreateProductCategoryMutationVariables>;
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
export const FindAllProductCategoriesDocument = gql`
    query findAllProductCategories {
  findAllProductCategories {
    id
    name
  }
}
    `;

/**
 * __useFindAllProductCategoriesQuery__
 *
 * To run a query within a React component, call `useFindAllProductCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllProductCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllProductCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllProductCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<FindAllProductCategoriesQuery, FindAllProductCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllProductCategoriesQuery, FindAllProductCategoriesQueryVariables>(FindAllProductCategoriesDocument, options);
      }
export function useFindAllProductCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllProductCategoriesQuery, FindAllProductCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllProductCategoriesQuery, FindAllProductCategoriesQueryVariables>(FindAllProductCategoriesDocument, options);
        }
export type FindAllProductCategoriesQueryHookResult = ReturnType<typeof useFindAllProductCategoriesQuery>;
export type FindAllProductCategoriesLazyQueryHookResult = ReturnType<typeof useFindAllProductCategoriesLazyQuery>;
export type FindAllProductCategoriesQueryResult = Apollo.QueryResult<FindAllProductCategoriesQuery, FindAllProductCategoriesQueryVariables>;
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
    productCategory {
      id
      name
    }
    productInventory {
      id
      quantity
    }
    createdAt
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