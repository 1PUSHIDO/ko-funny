// Файл: app/page.js
import styles from '../styles/Home.module.css';
import GifWithSound from '../components/GifWithSound';

const gifFiles = ['file1.gif', 'file2.gif'];

export default function Home() {
  const randomGif = gifFiles[Math.floor(Math.random() * gifFiles.length)];

  return (
    <>
    <div className={styles.container}>
      <GifWithSound 
        gifSrc={`/gifs/${gifFiles[Math.floor(Math.random() * gifFiles.length)]}`} 
      />
    </div>
    </>
  )
}