import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
  return (
    <div className="blog-post">
      <div className="blog-post__img">
        <img src={props.item.imageUrl} alt="" className="img"></img>
      </div>
      <div className="blog-post__info">
        <div className="blog-post__location">
          <span>
            <FontAwesomeIcon icon={faLocationDot} className="blog__icon" />
          </span>
          <span className="location">{props.item.location}</span>
          <span className="google__map">
            <a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
          </span>
        </div>
        <h1 className="blog-post__title">{props.item.title}</h1>
        <span className="blog-post__start-date">{props.item.startDate}</span>
        <span> - </span>
        <span className="blog-post__end-date">{props.item.endDate}</span>
        <p className="blog-post__text">{props.item.description}</p>
      </div>
    </div>
  );
}
