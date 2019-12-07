// jshint esversion:6
import React from 'react';
import SVG from 'react-inlinesvg';
import FacebookIcon from '../../dist/icons/facebook.svg';
import TwitterIcon from '../../dist/icons/twitter.svg';
import PinterestIcon from '../../dist/icons/pinterest.svg';
import LinkIcon from '../../dist/icons/link.svg';

const SharedDropdown = (props) => {
  let link = './icons/sampleimage.jpg';
  return (
    <div className='al-shared-dropdown'>
      <div className='al-shared-dropdown-header-container'>
        <div className='al-shared-dropdown-image-container'>
          <img className='al-shared-dropdown-image' src={link}/>
        </div>
        <div className='al-shared-dropdown-header-text-container'>
          <span className='al-shared-dropdown-header-text'>Beautiful 3,000 SF Castle in the Vineyards</span>
        </div>
        <div className='al-shared-dropdown-header-close-button-container'>
          <button onClick={props.handleCloseShared} className='al-shared-dropdown-header-close-button'>
          <span className='al-shared-dropdown-header-close-button-text'>X</span>
          </button>
        </div>
      </div>
      <div className='al-shared-dropdown-footer-container'>
        <div className='al-shared-dropdown-footer'>
          <div className='al-shared-dropdown-link-container'>
            <div className='al-shared-dropdown-icon-container'>
              <SVG className='al-shared-dropdown-icon' src={FacebookIcon}/>
            </div>
            <div className='al-shared-dropdown-text-container'>
              <span className='al-shared-dropdown-text'>Share</span>
            </div>
          </div>
          <div className='al-shared-dropdown-link-container'>
            <div className='al-shared-dropdown-icon-container'>
              <SVG className='al-shared-dropdown-icon' src={TwitterIcon}/>
            </div>
            <div className='al-shared-dropdown-text-container'>
              <span className='al-shared-dropdown-text'>Tweet</span>
            </div>
          </div>
          <div className='al-shared-dropdown-link-container'>
            <div className='al-shared-dropdown-icon-container'>
              <SVG className='al-shared-dropdown-icon' src={PinterestIcon}/>
            </div>
            <div className='al-shared-dropdown-text-container'>
              <span className='al-shared-dropdown-text'>Pin</span>
            </div>
          </div>
          <div className='al-shared-dropdown-link-container'>
            <div className='al-shared-dropdown-icon-container'>
              <SVG className='al-shared-dropdown-icon' src={LinkIcon}/>
            </div>
            <div className='al-shared-dropdown-text-container'>
              <span className='al-shared-dropdown-text'>Copy Link</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedDropdown;