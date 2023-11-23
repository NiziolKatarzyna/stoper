import styles from './App.module.scss';
import Stoper from './Component/Stoper/Stoper';
import { useState } from 'react';

const App = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    // Sprawdzamy, czy interwał już działa, aby uniknąć wielokrotnego uruchamiania
    if (!intervalId) {
      const id = setInterval(() => {
        // Zwiększamy czas o 1 co milisekundę
        setTime((prevTime) => prevTime + 1);
      }, 1);

      // Ustawiamy identyfikator interwału w stanie
      setIntervalId(id);
    }
  };
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleStart}>
        start
      </button>
      <button className={styles.button}>stop</button>
      <button className={styles.button}>reset</button>
      <Stoper milliseconds={time} />
    </div>
  );
};

export default App;
