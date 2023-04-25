import './App.css'
import CreateProduct from "./pages/CreateProduct";
import {gql, useQuery} from "@apollo/client";

function App() {
  const GET_ALL_PRODUCT_CATEGORIES = gql`
    query{
      findAllProductCategories{
        id
        name
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_ALL_PRODUCT_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data)
  return (
    <div className="App">
      <h1>Adriano's Shop</h1>
        <CreateProduct/>
    </div>
  )
}

export default App
