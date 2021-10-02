import React from "react";

import Scroll from "../utility/Scroll";
import CardList from "./ui/CardList";

function MostVisited(props) {
  const { title, start, end, ProductsList } = props;

  return (
    <Scroll height={"auto"}>
      <div id='card__list'>
        <p className='card__list--header'>{title}</p>
        <CardList
          Lists={ProductsList}
          ColSize={3}
          mainPage={false}
          start={start}
          end={end}
        />
      </div>
    </Scroll>
  );
}

export default MostVisited;
