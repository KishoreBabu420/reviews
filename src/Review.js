import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    setIndex((index) => {
      if (index === 0) {
        let newIndex = people.length - 1;
        return newIndex;
      } else {
        let newIndex = index - 1;
        return newIndex;
      }
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      if (index === people.length - 1) {
        let newIndex = 0;
        return newIndex;
      } else {
        let newIndex = index + 1;
        return newIndex;
      }
    });
  };

  const randomPerson = () => {
    setIndex((index) => {
      let newIndex = Math.trunc(Math.random() * people.length);
      return newIndex;
    });
  };
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <div className='author'>{name}</div>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        Random User
      </button>
    </article>
  );
};

export default Review;
