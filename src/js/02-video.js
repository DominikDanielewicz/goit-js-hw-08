'use strict';
import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on(
  'timeupdate',
  _.throttle(function (currentTime) {
    localStorage.setItem(LOCALSTORAGE_KEY, currentTime.seconds);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
  .then(function (seconds) {
    seconds = localStorage.getItem(LOCALSTORAGE_KEY);
    console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(
          'the time was less than 0 or greater than the video’s duration'
        );
        break;

      default:
        console.log('some other error occurred');
        break;
    }
  });
