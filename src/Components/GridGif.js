import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { ItemGif } from "./ItemGif";


export const GridGif = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      <div className="card-grid">
        {/* <ol> */}
          {images.map((img) => (
            <ItemGif key={img.id} {...img} />
          ))}
        {/* </ol> */}
      </div>
    </>
  );
};
