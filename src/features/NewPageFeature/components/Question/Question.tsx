import styles from '@features/NewPageFeature/styles.module.scss';
import React from 'react';
import { Answer } from '@features/NewPageFeature/components/Answer';
import { Title } from '@features/NewPageFeature/components/Title';
import { FormElementSizes } from '@frontend/uikit-rbc/constants';
import { InputType } from '@frontend/uikit-rbc/InputField/constants';
import { generateId } from '@utils/generateId';
import { QuestionProps } from '@features/NewPageFeature/types';
import { InputFieldController } from '@layout/InputFieldController';

/**
 * Компонент заполнения вопроса
 * @param props - QuestionProps
 * @returns React.FC
 */
export const Question: React.FC<QuestionProps> = (props) => {
  const { control, placeNumber, answers } = props;
  const id = generateId();

  const deleteButtonHandler = (idParam: string | number) => {
    console.log(idParam);
  };

  return (
    <div className={`${styles.question} m-b-24`}>
      <Title
        id={id}
        control={control}
        subtitlePlaceholder="Здесь укажите вопрос"
        titlePlaceholder="Необязательный подзаголовок для уточняющей информации респонденту"
        header={`Вопрос ${placeNumber}`}
        deleteButtonHandler={placeNumber !== 1 ? deleteButtonHandler : undefined}
      />

      <div className="flex flex-middle p-b-12">
        <div className="m-r-12">Минимум возможных ответов</div>
        <InputFieldController
          control={control}
          name={`question-min-answers-${id}`}
          placeholder=""
          size={FormElementSizes.Medium}
          type={InputType.Text}
          style={{ width: '52px', flex: 'none' }}
          isDisabled={false}
          defaultValue={1}
          isRequired
        />
      </div>

      <div className="flex flex-middle p-b-24">
        <div className="m-r-12">Максимум возможных ответов</div>
        <InputFieldController
          control={control}
          name={`question-max-answers-${id}`}
          placeholder=""
          size={FormElementSizes.Medium}
          type={InputType.Text}
          style={{ width: '52px', flex: 'none' }}
          isDisabled={false}
          defaultValue={99}
          isRequired
        />
      </div>

      {answers.map((answerItem, index) => (
        <Answer
          control={control}
          placeNumber={index + 1}
          id={answerItem.id}
          type={answerItem.type}
          key={answerItem.id}
        />
      ))}

      <button
        type="button"
        className="button md tertiary"
      >
        + Вариант ответа
      </button>
    </div>
  );
};
