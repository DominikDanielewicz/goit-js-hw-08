'use strict';

import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

function createGallery() {
  for (const { preview, original, description } of galleryItems) {
    const galleryItem = document.createElement('a');
    const galleryImg = document.createElement('img');
    galleryItem.classList.add('gallery__item');
    galleryImg.classList.add('gallery__image');
    galleryBox.append(galleryItem);
    galleryItem.append(galleryImg);
    galleryItem.setAttribute('href', `${original}`);
    galleryImg.setAttribute('src', `${preview}`);
    galleryImg.setAttribute('alt', `${description}`);
  }
}

createGallery();

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
