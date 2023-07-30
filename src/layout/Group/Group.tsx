import React from 'react';
import { Question } from '@layout/Question';
import { Title } from '@layout/Title';
import {
  BasicAnswerProps,
  BasicGroupProps,
  BasicQuestionProps,
  MoveComponentParams,
} from '@types';
import { MoveControls } from '@layout/MoveControls';
import { Control, FieldValues } from 'react-hook-form';
import styles from './styles.module.scss';

export interface GroupProps extends BasicGroupProps {
  placeNumber: number;
  groupLength: number;
  control: Control<FieldValues, unknown>;
  questionArray: BasicQuestionProps[];
  deleteGroupHandler: (idParam: number) => void;
  addQuestionHandler: (groupIdParam: number) => void;
  moveComponent: ({ fromIndex, toIndex, blockType }: MoveComponentParams) => void;
  answersArray: BasicAnswerProps[];
  addAnswerHandler: ({ questionIdParam, groupIdParam }: { questionIdParam: number; groupIdParam: number }) => void;
  deleteQuestionHandler: (idParam: number) => void;
  deleteAnswerHandler: (idParam: number) => void;
}

/**
 * Компонент заполнения группы вопросов
 * @param props - GroupProps
 * @returns React.FC
 */
export const Group: React.FC<GroupProps> = (props) => {
  const {
    placeNumber, id, groupLength, control, questionArray, deleteGroupHandler, addQuestionHandler, moveComponent,
    answersArray, addAnswerHandler, deleteQuestionHandler, deleteAnswerHandler,
  } = props;
  const currentQuestions = questionArray.filter((questionItem) => questionItem.groupId === id);

  return (
    <fieldset
      className={`${styles.group} m-b-24`}
      id={`group-fieldset-${id}`}
    >
      <MoveControls
        currentIndex={placeNumber - 1}
        moveComponent={moveComponent}
        blockType="group"
        shouldRightRender={placeNumber < groupLength}
        shouldLeftRender={placeNumber > 1}
      />
      <Title
        id={id}
        header={`Группа ${placeNumber}`}
        titlePlaceholder="Озаглавьте группу вопросов, чтобы респондент с чем ему придется иметь дело далее"
        subtitlePlaceholder="Необязательный подзаголовок для уточняющей информации респонденту"
        deleteButtonHandler={groupLength > 1 ? deleteGroupHandler : undefined}
        titleName={`group-title-${id}`}
        subtitleName={`group-subtitle-${id}`}
        control={control}
      />
      {currentQuestions && currentQuestions.map((questionItem, index) => (
        <Question
          placeNumber={index + 1}
          actualIndex={questionArray.findIndex((commonQuestionItem) => commonQuestionItem.id === questionItem.id)}
          id={questionItem.id}
          groupId={id}
          type={questionItem.type}
          key={id}
          questionLength={currentQuestions.length}
          answersArray={answersArray}
          addAnswerHandler={addAnswerHandler}
          deleteQuestionHandler={deleteQuestionHandler}
          moveComponent={moveComponent}
          control={control}
          deleteAnswerHandler={deleteAnswerHandler}
        />
      ))}

      <button
        type="button"
        className="button md tertiary"
        onClick={() => addQuestionHandler(id)}
      >
        + Вопрос
      </button>
    </fieldset>
  );
};
