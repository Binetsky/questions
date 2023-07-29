import styles from '@features/StatusPageFeature/styles.module.scss';
import React, { useContext } from 'react';
import { SurveyResult } from '@models/surveyResult';
import { StatusPageContext } from '@context/StatusPageContext';

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
    meta, results, timestamp, surveySource, _id: resultId,
  } = result;
  const { survey: { questions, groups, answers } } = useContext(StatusPageContext);
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
              {groups.map((groupItem) => {
                const filteredQuestions = questions.filter((questionItem) => questionItem.groupId === groupItem.id);

                return (
                  <React.Fragment key={groupItem.id}>
                    <div className="headline-6 m-t-24 m-b-12">{groupItem.title}</div>
                    <div className="table-wrapper">
                      <table className="table w-hover">
                        <colgroup>
                          <col width="36px" />
                          <col />
                          <col />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>№</th>
                            <th>Вопрос</th>
                            <th>Ответ</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredQuestions.map((questionItem, questionIndex) => {
                            const filteredResult = results[questionItem.id];

                            return (
                              <tr key={questionItem.id}>
                                <td>{questionIndex + 1}</td>
                                <td>{questionItem.title}</td>
                                <td>
                                  {/* @ts-ignore */}
                                  {filteredResult.map((resultItem) => {
                                    const currentAnswer = answers.find((answerItem) => answerItem.id === resultItem);
                                    const isOpenAnswer = currentAnswer?.answerType === 'open';
                                    const answerTitle = isOpenAnswer ? results[resultItem] as unknown as number : currentAnswer?.title;

                                    return (
                                      <div
                                        className="flex"
                                        key={resultItem}
                                      >
                                        <div className="p-r-12 txt-secondary">
                                          {isOpenAnswer ? 'Открытый' : 'Закрытый'}
                                          {' '}
                                          ответ
                                        </div>
                                        <div
                                          className="m-b-8"
                                          key={resultItem}
                                        >
                                          {answerTitle}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                  </React.Fragment>
                );
              })}
            </>
          )}
        </div>
      )}
    </>
  );
};
