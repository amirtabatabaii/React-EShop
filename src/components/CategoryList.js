import React from "react";
import { Link } from "react-router-dom";
import Scroll from "../utility/Scroll";

function CategoryList(props) {
  const { listOfCategory } = props;

  return (
    <div className='d-none d-lg-block ' id='products'>
      <div className='products__header'>All Category</div>
      <Scroll height={"48rem"}>
        {listOfCategory.map((cat) => (
          <h5
            key={cat.id}
            className='products__list'
            onClick={() => props.onClick(cat.id)}
          >
            <Link
              className='product__cat'
              to={{
                target: "_blank",
                pathname: `/products/${cat.id}`,
                state: {
                  id: cat.id,
                },
              }}
            >
              {cat.name}
            </Link>
          </h5>
        ))}
      </Scroll>
    </div>
  );
}

export default CategoryList;
