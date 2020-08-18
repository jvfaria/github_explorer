import React from 'react';
import './styles.css'


interface CardProps{
  full_name: string;
  description: string;
  avatar: string;
}

const CardItem = ({ full_name, description, avatar }: CardProps) => {
  return (
    <div id="card-item">
      <img src={avatar} alt="avatar" />

      <div id="card-description">
        <strong>{full_name}</strong>
        <span>{description}</span>
      </div>

      <img
        id="arrow"
        src="https://res.cloudinary.com/jvfaria015/image/upload/v1597420468/arrowRight_vinrt0.svg"
        alt="arrow-right" />

    </div>
  );
}


export default CardItem;
