import React from 'react';
import styles from './styles.module.scss';

/**
 * Футер приложения
 * @returns React.FC
 */
export const Footer: React.FC = () => (
  <div className={styles.footer}>
    &copy;
    Золотые руки
    {' '}
    {new Date().getFullYear()}
  </div>
);
