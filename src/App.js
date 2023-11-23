import styles from './App.module.scss';
import Stoper from './Component/Stoper/Stoper';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    // Sprawdzamy, czy interwał już działa, aby uniknąć wielokrotnego uruchamiania

    if (!intervalId) {
      clearInterval(intervalId);
      setTime(0);
      const id = setInterval(() => {
        // Zwiększamy czas o 1 co milisekundę
        setTime((prevTime) => prevTime + 1);
      }, 1);

      // Ustawiamy identyfikator interwału w stanie
      setIntervalId(id);
    }
  };
  const handleStop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setTime(0);
    setIntervalId(null);
  };
  useEffect(() => {
    // Zeruj interval, gdy komponent jest usuwany
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleStart}>
        start
      </button>
      <button className={styles.button} onClick={handleStop}>
        stop
      </button>
      <button className={styles.button} onClick={handleReset}>
        reset
      </button>
      <Stoper milliseconds={time} />
    </div>
  );
};

export default App;
