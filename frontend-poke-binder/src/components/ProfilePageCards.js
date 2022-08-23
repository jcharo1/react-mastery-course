import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ProfileBinder = ({ cards }) => {
  const images = cards.map((pokemon) => {
    return (
      <ImageCard
        key={pokemon.name}
        image={pokemon.images.small}
        description={pokemon.flavorText}
      />
    );
  });

  return <div className="image-list cards-container">{images}</div>;
};

export default ProfileBinder;
