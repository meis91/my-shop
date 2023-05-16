import './App.css'
import CreateProduct from "./pages/CreateProduct";
import {gql, useQuery} from "@apollo/client";
import {LOAD_PRODUCT_CATEGORIES} from "./graphql/queries";
import {useEffect, useState} from "react";
import {ProductCategory} from "./gql/graphql";
import {useFindAllProductCategoriesQuery} from "./__generated__/graphql";

export type ProductCategoryData = {
    id: string
    name: string
}

export type ProductCategoriesProps = {
    productCategories: ProductCategory[]
};


function App() {
    const { data, loading, error } = useFindAllProductCategoriesQuery() /*useQuery(LOAD_PRODUCT_CATEGORIES);*/
    const [productCategories, setProductCategories] = useState<ProductCategoriesProps>();

    useEffect(() => {
        console.log(data)
        if(data){
            let productCategories: ProductCategoriesProps;
            data.findAllProductCategories?.map(category => {
                let productCategory : ProductCategoryData = { id : category?.id, name : category?.name}
            })

            setProductCategories(data.findAllProductCategories);
            console.log(productCategories);
        }
    },[data]);

    return (
    <div className="App">
      <h1>Adriano's Shop</h1>
        {loading && <div>Loading..</div>}
        {error && <div>Error</div>}
        {data && <CreateProduct productCategories={data.findAllProductCategories}/>}

    </div>
  )
}

export default App
