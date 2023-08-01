import React from 'react';
import {
  Control, FieldValues, useForm, UseFormHandleSubmit,
} from 'react-hook-form';
import {
  BasicAnswerProps,
  BasicGroupProps,
  BasicQuestionProps,
} from '@types';
import {
  CommonStatesAndDispatchers,
  UseAnswersToggleReturn,
  UseGroupsToggleReturn,
  UseMoveComponentsReturn,
  UseQuestionsToggleReturn,
} from '@context/NewSurveyContext/types';
import { useAnswersToggle, useGroupsToggle, useQuestionsToggle } from '@context/NewSurveyContext/hooks';
import { useMoveComponents } from '@context/NewSurveyContext/hooks/useMoveComponents';
import { useHandleSave } from '@context/NewSurveyContext/hooks/useHandleSave';
import { initialAnswer, initialGroup, initialQuestion } from '@features/NewPageFeature/constants';
import { useRouter } from 'next/router';

interface NewSurveyState extends CommonStatesAndDispatchers, UseGroupsToggleReturn,
  UseQuestionsToggleReturn, UseAnswersToggleReturn, UseMoveComponentsReturn {
  handleSave: (data: FieldValues) => Promise<void>;
  handleSaveAndPublish: () => void;
  isPublished: boolean;
  handleSubmit?: UseFormHandleSubmit<FieldValues, undefined>;
  control?: Control<FieldValues, unknown>;
}

/**
 * UserContextState - контекст текущего пользователя
 */
const contextInitialState: NewSurveyState = {
  addAnswerHandler: () => null,
  addGroupHandler: () => null,
  addQuestionHandler: () => null,
  answersArray: [],
  deleteAnswerHandler: () => null,
  deleteGroupHandler: () => null,
  deleteQuestionHandler: () => null,
  groupArray: [],
  handleSave: async () => undefined,
  handleSaveAndPublish: () => null,
  questionArray: [],
  setAnswersArray: () => null,
  setGroupArray: () => null,
  setQuestionArray: () => null,
  moveComponent: () => null,
  isPublished: false,
};

export const NewSurveyContext = React.createContext(contextInitialState);

/**
 * UserContextProvider - провайдер контекста пользователя
 */
export const NewSurveyProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [groupArray, setGroupArray] = React.useState<BasicGroupProps[]>([]);
  const [questionArray, setQuestionArray] = React.useState<BasicQuestionProps[]>([]);
  const [answersArray, setAnswersArray] = React.useState<BasicAnswerProps[]>([]);
  const [publishTimestamp, setPublishTimestamp] = React.useState<number | null>(null);
  const [firstPublishTimestamp, setFirstPublishTimestamp] = React.useState<number | null>(null);
  const { control, handleSubmit } = useForm({});
  const router = useRouter();

  const { addGroupHandler, deleteGroupHandler } = useGroupsToggle({
    groupArray, setGroupArray, questionArray, setQuestionArray, answersArray, setAnswersArray,
  });

  const { addQuestionHandler, deleteQuestionHandler } = useQuestionsToggle({
    questionArray, setQuestionArray, answersArray, setAnswersArray,
  });

  const { addAnswerHandler, deleteAnswerHandler } = useAnswersToggle({ answersArray, setAnswersArray });

  const { moveComponent } = useMoveComponents({
    groupArray, setGroupArray, questionArray, setQuestionArray, answersArray, setAnswersArray,
  });

  // хелпер приведения данных к модели и их сохранения в бд
  const { handleSave } = useHandleSave({
    groupArray, questionArray, answersArray, publishTimestamp, redirect: () => router.push('/'), firstPublishTimestamp,
  });

  // Хелпер сохранения с публикацией опроса
  const handleSaveAndPublish = () => {
    const currentTimestamp = new Date().valueOf();

    setPublishTimestamp(currentTimestamp);
    setFirstPublishTimestamp(currentTimestamp);
    handleSubmit(handleSave);
  };

  React.useEffect(() => {
    setGroupArray([initialGroup]);
    setQuestionArray([initialQuestion]);
    setAnswersArray([initialAnswer]);
  }, []);

  return (
    <NewSurveyContext.Provider value={{
      addAnswerHandler,
      addGroupHandler,
      addQuestionHandler,
      answersArray,
      control,
      deleteAnswerHandler,
      deleteGroupHandler,
      deleteQuestionHandler,
      groupArray,
      handleSave,
      handleSaveAndPublish,
      handleSubmit,
      moveComponent,
      questionArray,
      setAnswersArray,
      setGroupArray,
      setQuestionArray,
      isPublished: !!publishTimestamp,
    }}
    >
      {children}
    </NewSurveyContext.Provider>
  );
};
