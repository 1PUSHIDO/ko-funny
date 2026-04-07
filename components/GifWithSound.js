// Файл: components/GifWithSound.js
'use client';

import styles from '../styles/Home.module.css';

const soundFiles = ['sound1.mp3', 'sound2.mp3', 'sound3.mp3', 'sound4.mp3', 'sound5.mp3', 'sound6.mp3', 'sound7.mp3'];

export default function GifWithSound({ gifSrc }) {
  const handleClick = () => {
    const file = soundFiles[Math.floor(Math.random() * soundFiles.length)]
    console.log(file);
    const audio = new Audio(`/sounds/${file}`);
    audio.play();
  };

  return (
    <img 
      src={gifSrc} 
      alt="Interactive GIF" 
      className={styles.gif} 
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    />
  );
}