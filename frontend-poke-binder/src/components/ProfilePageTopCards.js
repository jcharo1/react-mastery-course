import React from "react";
import { Progress, Grid } from "semantic-ui-react";

const TopCards = ({ jungleSet, baseSet, fossil }) => {
  return (
    <div className="images-leaning">
      <div>
        <img
          src="https://images.pokemontcg.io/base1/63_hires.png"
          alt="Chidi from The Good Place"
        />
      </div>
      <div>
        <img
          src="https://images.pokemontcg.io/base1/44_hires.png"
          alt="Jason from The Good Place"
        />
      </div>
      <div>
        <img
          src="https://images.pokemontcg.io/base2/60_hires.png"
          alt="Tahani from The Good Place"
        />
      </div>
    </div>
  );
};

export default TopCards;
