import {gql} from "@apollo/client";

export const LOAD_PRODUCT_CATEGORIES = gql`
    query{
        findAllProductCategories{
            id
            name
        }
    }
`;