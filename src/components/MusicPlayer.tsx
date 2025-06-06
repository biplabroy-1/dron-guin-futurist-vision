
import { useEffect, useRef } from 'react';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(console.log);
      }
    };

    // Play after user interaction
    const handleUserInteraction = () => {
      playMusic();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  return (
    <audio 
      ref={audioRef} 
      loop 
      preload="auto"
      style={{ display: 'none' }}
    >
      <source src="https://p.scdn.co/mp3-preview/8b4c7e1f3d3e2a1b9c0d5e6f7a8b9c0d1e2f3a4b" type="audio/mpeg" />
    </audio>
  );
};

export default MusicPlayer;
