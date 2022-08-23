import "./ImageList.css";

import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = Object.keys(props.pokemon).map((pokemon_name) => {
    let pokemon_data = props.pokemon[pokemon_name];
    let pokemon_number = pokemon_data["number"];
    let pokemon_set = pokemon_data["set"]["name"];
    let pokemon_image = pokemon_data["images"]["small"];

    return (
      <ImageCard
        key={pokemon_name}
        name={pokemon_name}
        image={pokemon_image}
        pokemon_number={pokemon_number}
        pokemon_set={pokemon_set}
        description={pokemon_data["flavorText"]}
      />
    );
  });

  return <div className="image-list cards-container">{images}</div>;
};

export default ImageList;
