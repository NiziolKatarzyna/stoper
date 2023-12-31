import { useState } from 'react';
import styles from './Stoper.module.scss';
import { useEffect } from 'react';
import { format } from 'date-fns';

const Stoper = ({ milliseconds }) => {
  const formattedTime = format(
    new Date(milliseconds) - 3600000,
    'HH:mm:ss.SSS'
  );
  const customFormattedTime = formattedTime.substring(0, 12);

  return (
    <section>
      <p className={styles.stoper}>{customFormattedTime}</p>
    </section>
  );
};
export default Stoper;
