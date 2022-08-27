import "./ImageList.css";

import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.pokemon.map((pokemon_name) => {
    // let pokemon_data = props.pokemon[pokemon_name];
    let pokemon_number = pokemon_name.number;
    let pokemon_set = pokemon_name.set.name;
    let pokemon_image = pokemon_name.images.large;
    let randomKey = new Date().getTime() * Math.random() * 100000;

    return (
      <ImageCard
        key={randomKey}
        name={pokemon_name.name}
        image={pokemon_image}
        pokemon_number={pokemon_number}
        pokemon_set={pokemon_set}
        description={pokemon_name.flavorText}
      />
    );
  });

  return <div className="image-list cards-container">{images}</div>;
};

export default ImageList;
