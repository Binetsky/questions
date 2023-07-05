import styles from '@features/StatusPageFeature/styles.module.scss';
import React from 'react';

export const DetailedStatusCard = () => {
  const moxk = 0;

  return (
    <div className={`${styles['status-container']} m-b-24`}>
      <div className="p-b-12">
        <div className="p-b-8">Дата: 12.12.12</div>
        <div className="p-b-8">Источник: Апи / Страница опроса</div>
        <div className="p-b-8">Мета-информация: Что пришло в хедере</div>
      </div>

      <div className="p-b-8">Группа 1</div>
      <div className="p-t-8 m-b-12 stroke-b">
        <div className="p-b-8">Вопрос: Какой-то вопрос</div>
        <div className="p-b-8">Ответ (открытый): Какой-то ответ</div>
      </div>
    </div>
  );
};
