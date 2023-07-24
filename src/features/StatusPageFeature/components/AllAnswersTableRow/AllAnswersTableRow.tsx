import styles from '@features/StatusPageFeature/styles.module.scss';
import React from 'react';
import { SurveyResult } from '@models/surveyResult';

interface AllAnswersTableRowProps {
  result: SurveyResult;
}

/**
 * Компонент строки вопроса с ответом из Все ответы
 *
 * @returns React.FC
 */
export const AllAnswersTableRow: React.FC<AllAnswersTableRowProps> = (props) => {
  const { result } = props;
  // Todo: вывести детализацию по результатам
  const {
    meta, results, timestamp, clientKey, surveyId, surveySource, _id: resultId,
  } = result;
  const currentHours = new Date(timestamp).getHours();
  const currentMinutes = new Date(timestamp).getMinutes();
  const separateCookies = meta.cookies.split('; ');
  const [isMetaOpen, setIsMetaOpen] = React.useState(false);
  const [isAnswersOpen, setAnswersOpen] = React.useState(false);

  const metaShowHandler = () => {
    setAnswersOpen(false);
    setIsMetaOpen(true);
  };

  const answersShowHandler = () => {
    setIsMetaOpen(false);
    setAnswersOpen(true);
  };

  const containerHideHandler = () => {
    setAnswersOpen(false);
    setIsMetaOpen(false);
  };

  return (
    <>
      <div className="flex flex-middle">
        <div className={`${styles['table-column-one']} p-12`}>
          {currentHours < 10 ? `0${currentHours}` : currentHours}
          :
          {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}
        </div>
        <div className={`${styles['table-column-two']} p-12`}>
          {resultId}
        </div>
        <div className={`${styles['table-column-three']} p-12`}>
          {surveySource || 'Страница опроса'}
        </div>
        <div className={`${styles['table-column-four']} p-12`}>
          <button
            type="button"
            className="button sm tertiary"
            onClick={answersShowHandler}
          >
            Просмотр результатов
          </button>
        </div>
        <div className={`${styles['table-column-five']} p-12`}>
          <button
            type="button"
            className="button sm tertiary"
            onClick={metaShowHandler}
          >
            Просмотр информации
          </button>
        </div>
      </div>
      {(isMetaOpen || isAnswersOpen) && (
        <div className={`${styles['full-info']} p-12 stroke-b`}>
          <button
            type="button"
            className="button sm secondary m-b-12"
            onClick={containerHideHandler}
          >
            Скрыть
          </button>

          {isMetaOpen && (
            <>
              <div className="p-b-8">
                Браузер:
                {' '}
                {meta.browser.name}
                {', '}
                {meta.browser.version}
              </div>
              <div className="p-b-8">
                Операционная система:
                {' '}
                {meta.os}
              </div>
              <div className="p-b-8">
                Cookies:
                {separateCookies.map((cookieItem) => (
                  <div
                    className="m-b-8 p-l-24 txt-secondary"
                    style={{ wordBreak: 'break-all' }}
                  >
                    {cookieItem}
                  </div>
                ))}
              </div>
            </>
          )}
          {isAnswersOpen && (
            <>
              <div className="headline-6">Группа 1</div>
              <div className="flex w-100 p-y-12">
                <div style={{ width: '40px', flex: 'none' }}>1</div>
                <div className="w-40">Вопрос 1</div>
                <div className="w-40">Ответ 1</div>
                <div className="w-20">Открытый ответ</div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
