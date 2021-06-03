import React from "react";
import "./App.css"; //Importing App.css file
import ProductComponent from './ProductComponent'
import './productComponent.css'
import {DATA} from './data'


function App() {
  return (
    <div className="App">
     Product
      <ProductComponent data={DATA}/>
    </div>
  );
}

export default App;
