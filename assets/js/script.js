'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./assets/images/iflookscouldkill.jpg",
    posterUrl: "./assets/images/iflookscouldkill.jpg",
    title: "If looks could kill",
    album: "If looks could kill",
    year: 2023,
    artist: "Destroy Lonely",
    musicPath: "./sounds/iflookscouldkill.mp3",
  },
  {
    backgroundImage: "./assets/images/nostylist.jpg",
    posterUrl: "./assets/images/nostylist.jpg",
    title: "No stylist",
    album: "No Stylist",
    year: 2022,
    artist: "Destroy Lonely",
    musicPath: "./sounds/nostylist.mp3",
  },
  {
    backgroundImage: "./assets/images/60mgs.jpg",
    posterUrl: "./assets/images/60mgs.jpg",
    title: "60 MGS (Unreleased)",
    album: "None",
    year: 2022,
    artist: "Lucki",
    musicPath: "./sounds/60mgs.mp3",
  },
  {
    backgroundImage: "./assets/images/leaveher.jpg",
    posterUrl: "./assets/images/leaveher.jpg",
    title: "Leave Her",
    album: "None",
    year: 2023,
    artist: "Lucki",
    musicPath: "./sounds/leaveher.mp3",
  },
  {
    backgroundImage: "./assets/images/stoptheact.jpg",
    posterUrl: "./assets/images/stoptheact.jpg",
    title: "Stop the Act",
    album: "None",
    year: 2021,
    artist: "Lucki",
    musicPath: "./sounds/stoptheact.mp3",
  },
  {
    backgroundImage: "./assets/images/sunset.jpg",
    posterUrl: "./assets/images/sunset.jpg",
    title: "Sunset",
    album: "None",
    year: 2021,
    artist: "Lucki",
    musicPath: "./sounds/sunset.mp3",
  },
  {
    backgroundImage: "./assets/images/sessions.jpg",
    posterUrl: "./assets/images/sessions.jpg",
    title: "Sessions FT. Lucki",
    album: "None",
    year: 2021,
    artist: "Sharkey",
    musicPath: "./sounds/sessions.m4a",
  },
  {
    backgroundImage: "./assets/images/heysiri.jpg",
    posterUrl: "./assets/images/heysiri.jpg",
    title: "Hey, Siri!",
    album: "None",
    year: 2023,
    artist: "Iayze!",
    musicPath: "./sounds/heysiri.mp3",
  },
  {
    backgroundImage: "./assets/images/gostyle.jpg",
    posterUrl: "./assets/images/gostyle.jpg",
    title: "GoStyle Freestyle 2023",
    album: "None",
    year: 2023,
    artist: "Iayze!",
    musicPath: "./sounds/gostyle.mp3",
  },
  {
    backgroundImage: "./assets/images/nogta.jpg",
    posterUrl: "./assets/images/nogta.jpg",
    title: "No GTA",
    album: "None",
    year: 2022,
    artist: "Iayze!",
    musicPath: "./sounds/nogta.mp3",
  },
  {
    backgroundImage: "./assets/images/teenx.jpg",
    posterUrl: "./assets/images/teenx.jpg",
    title: "Teen X",
    album: "Teen X",
    year: 2021,
    artist: "Ken Carson",
    musicPath: "./sounds/teenx.mp3",
  },
  {
    backgroundImage: "./assets/images/yale.jpg",
    posterUrl: "./assets/images/yale.jpg",
    title: "Yale",
    album: "Teen X",
    year: 2021,
    artist: "Ken Carson",
    musicPath: "./sounds/yale.mp3",
  },
  {
    backgroundImage: "./assets/images/rocknroll.jpeg",
    posterUrl: "./assets/images/rocknroll.jpeg",
    title: "Rock N Roll",
    album: "Project X",
    year: 2022,
    artist: "Ken Carson",
    musicPath: "./sounds/rocknroll.mp3",
  },
  {
    backgroundImage: "./assets/images/ineedu.jpg",
    posterUrl: "./assets/images/ineedu.jpg",
    title: "i need u",
    album: "none",
    year: 2023,
    artist: "Ken Carson",
    musicPath: "./sounds/ineedu.mp3",
  },
  {
    backgroundImage: "./assets/images/lifestyle.jpg",
    posterUrl: "./assets/images/lifestyle.jpg",
    title: "Lifestyle",
    album: "Homixide Lifestyle",
    year: 2023,
    artist: "Homixide Gang",
    musicPath: "./sounds/lifestyle.mp3",
  },
  {
    backgroundImage: "./assets/images/gta.jpg",
    posterUrl: "./assets/images/gta.jpg",
    title: "GTA",
    album: "None",
    year: 2022,
    artist: "KanKan",
    musicPath: "./sounds/gta.mp3",
  },
  {
    backgroundImage: "./assets/images/back2dabasics.jpg",
    posterUrl: "./assets/images/back2dabasics.jpg",
    title: "back 2 da basics",
    album: "Nothing more Nothing LESS",
    year: 2022,
    artist: "summrs",
    musicPath: "./sounds/back2dabasics.mp3",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
