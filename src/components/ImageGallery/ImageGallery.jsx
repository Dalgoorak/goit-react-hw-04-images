import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={css.ImageGallery}>
      {images.map(item => (
        <ImageGalleryItem
          key={item.id}
          src={item.webformatURL}
          srcOriginal={item.largeImageURL}
          id={item.id}
          alt={item.tags}
          getLargeImageURL={onImageClick}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
