import './App.css'
import CreateProduct from "./pages/CreateProduct";
import {gql, useQuery} from "@apollo/client";

function App() {

  return (
    <div className="App">
      <h1>Adriano's Shop</h1>
        <CreateProduct/>
    </div>
  )
}

export default App
