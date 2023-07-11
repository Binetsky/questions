import styles from './styles.module.scss';

interface SurveyHeaderProps {
  progress: number;
}

/**
 * Компонент шапки страницы прохождения опроса
 * @returns React.FC
 */
export const SurveyHeader: React.FC<SurveyHeaderProps> = (props) => {
  const { progress } = props;

  return (
    <div className={styles.header}>
      <nav className={`${styles['header-nav']} headline-4-short flex`}>
        <a
          href="https://www.rbc.ru/"
          className="flex m-r-4"
        >
          <span className="ra-icon-rbc" />
          РБК
        </a>
        ✦ Опросы
      </nav>
      <div
        className={styles['header-progress-bar']}
        title="Прогресс прохождения опроса"
      >
        <div
          className={styles['header-progress-line']}
          style={{ width: `calc(${100 / progress}% - 20px)`, maxWidth: '100%', transition: '.5s' }}
        />
      </div>
    </div>
  );
};
