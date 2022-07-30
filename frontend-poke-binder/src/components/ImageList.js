import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = Object.keys(props.pokemon).map((pokemon_name) => {
    let pokemon_data = props.pokemon[pokemon_name];

    let pokemon_image = pokemon_data["images"]["small"];

    return (
      <ImageCard
        key={pokemon_name}
        image={pokemon_image}
        description={pokemon_data["flavorText"]}
      />
    );
  });
  return <div className="image-list cards-container">{images}</div>;
};

export default ImageList;
