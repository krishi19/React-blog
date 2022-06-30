import React from 'react';
import { NavLink, Link} from 'react-router-dom';

function CardItem(props) {
  console.log(props.blog)
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={{pathname: props.path, blogProp : props.blog}} state={{blog:props.blog}}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.title}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
