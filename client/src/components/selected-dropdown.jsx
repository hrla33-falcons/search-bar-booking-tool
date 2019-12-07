// jshint esversion:6
import React from 'react';
import StarRatings from 'react-star-ratings';

const SelectedDropdown = (props) => {
  let link = './icons/sampleimage.jpg';
  let rating = 4.6;
  return (
    <div className='al-selected-dropdown'>
      <div className='al-selected-dropdown-header-container'>
        <div className='al-selected-dropdown-header-text-container'>
          <span className='al-selected-dropdown-header-text'>Add to a Trip Board</span>
        </div>
        <div className='al-selected-dropdown-header-close-button-container' onClick={props.handleCloseSelected}>
          <button className='al-selected-dropdown-header-close-button'>
            <span className='al-selected-dropdown-header-close-button-text'>X</span>
          </button>
        </div>
      </div>
      <div className='al-selected-dropdown-footer-container'>
        <div className='al-selected-dropdown-footer-left-container'>
          <div className='al-selected-dropdown-footer-left-trip-container'>
            <div className='al-selected-dropdown-footer-left-image-container'>
              <img className='al-selected-dropdown-footer-left-image' src={link}/>
            </div>
            <div className='al-selected-dropdown-footer-left-description-container'>
              <span className='al-selected-dropdown-footer-left-description-text'>Beautiful 3,000 SF Castle in the Vineyards</span>
            </div>
            <div className='al-selected-dropdown-footer-left-rating-container'>
              <div className='al-selected-dropdown-footer-left-stars-container'>
                <StarRatings rating={rating} starRatedColor='black' numberOfStars={5} name='rating' starDimension='15px' starSpacing='1.5px'/>
              </div>
              <div className='al-selected-dropdown-footer-left-reviews-container'>
                <span className='al-selected-dropdown-footer-left-reviews-text'>(109)</span>
              </div>
            </div>
          </div>
        </div>
        <div className='al-selected-dropdown-footer-right-container'>
          <div className='al-selected-dropdown-footer-right-create-form-container'>
            <div className='al-selected-dropdown-footer-right-create-form-title'>
              <div className='al-selected-dropdown-footer-right-create-form-button-container'>
                <span className='al-selected-dropdown-footer-right-create-form-button-text'>+</span>
              </div>
              <div className='al-selected-dropdown-footer-right-text-container'>
                <span className='al-booking-footer-right-text'>Create new Trip Board</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedDropdown;