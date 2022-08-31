import "./ImageList.css";
import {
  Button,
  Header,
  Image,
  Modal,
  Grid,
  Segment,
  Container,
} from "semantic-ui-react";
import ImageCard from "./ImageCard";
import ReactPaginate from "react-paginate";
import React from "react";
const PER_PAGE = 18;
const ImageList = (props) => {
  const [currentPage, setCurrentPage] = React.useState(0);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const pageCount = Math.ceil(props.pokemon.length / PER_PAGE);
  const offset = currentPage * PER_PAGE;
  const images = props.pokemon
    .slice(offset, offset + PER_PAGE)
    .map((pokemon_name) => {
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

  return (
    <>
      <div className="cards-container">{images} </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={10}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"paginationBttns"}
        nextLinkClassName={"paginationBttns"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </>
  );
};

export default ImageList;
