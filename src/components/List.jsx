import React from "react";
import ListItem from "./ListItem";

const List = ({ data }) => {
  return data?.map((item) => (
    <ListItem
      key={item.imdbID}
      imdbID={item?.imdbID}
      Poster={item?.Poster}
      Title={item?.Title}
    />
  ));
};

export default List;
