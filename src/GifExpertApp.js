import React, {useState} from "react";
import { AddCategory } from "./Components/AddCategory";
import { GridGif } from "./Components/GridGif";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(["One Punch"]);

  

  return (
    <>
      <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
      <hr />    


      <ol>
        {categories.map((category) =>  <GridGif category={category} key={category}/> )}
      </ol>
    </>
  );
};
