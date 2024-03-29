import React from 'react';
import { SurveyItem } from '@models/survey';
import {
  Control, FieldValues, useForm, UseFormHandleSubmit,
} from 'react-hook-form';
import { BasicAnswerProps, BasicGroupProps, BasicQuestionProps } from '@types';
import { useAnswersToggle, useGroupsToggle, useQuestionsToggle } from '@context/NewSurveyContext/hooks';
import { useMoveComponents } from '@context/NewSurveyContext/hooks/useMoveComponents';
import {
  CommonStatesAndDispatchers, UseAnswersToggleReturn,
  UseGroupsToggleReturn, UseMoveComponentsReturn,
  UseQuestionsToggleReturn,
} from '@context/NewSurveyContext/types';
import { useHandleSave } from '@context/NewSurveyContext/hooks/useHandleSave';
import { useRouter } from 'next/router';

interface EditSurveyState extends CommonStatesAndDispatchers, UseGroupsToggleReturn,
  UseQuestionsToggleReturn, UseAnswersToggleReturn, UseMoveComponentsReturn {
  survey: SurveyItem | null;
  handleSave: (data: FieldValues) => Promise<void>;
  handleSaveAndPublish: () => void;
  isPreviouslyPublished: boolean;
  handleSubmit?: UseFormHandleSubmit<FieldValues, undefined>;
  control?: Control<FieldValues, unknown>;
}

/**
 * UserContextState - контекст текущего пользователя
 */
const contextInitialState: EditSurveyState = {
  survey: null,
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
  isPreviouslyPublished: false,
};

export const EditSurveyContext = React.createContext(contextInitialState);

/**
 * UserContextProvider - провайдер контекста пользователя
 */
export const EditSurveyProvider: React.FC<{ children?: React.ReactNode; survey: SurveyItem }> = ({ children, survey: initialSurvey }) => {
  const [survey, setSurvey] = React.useState<SurveyItem | null>(initialSurvey);
  const [groupArray, setGroupArray] = React.useState<BasicGroupProps[]>([]);
  const [questionArray, setQuestionArray] = React.useState<BasicQuestionProps[]>([]);
  const [answersArray, setAnswersArray] = React.useState<BasicAnswerProps[]>([]);
  const [isPreviouslyPublished, setIsPreviouslyPublished] = React.useState<boolean>(false);
  const [publishTimestamp, setPublishTimestamp] = React.useState<number | null>(initialSurvey.publishTimestamp || null);
  const [firstPublishTimestamp, setFirstPublishTimestamp] = React.useState<number | null>(initialSurvey.firstPublishTimestamp || null);
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
    groupArray,
    questionArray,
    answersArray,
    publishTimestamp,
    surveyId: survey?._id,
    redirect: () => router.push('/'),
    firstPublishTimestamp,
  });

  // Хелпер сохранения с публикацией опроса
  const handleSaveAndPublish = () => {
    const currentTimestamp = new Date().valueOf();

    setPublishTimestamp(currentTimestamp);
    setFirstPublishTimestamp(firstPublishTimestamp || currentTimestamp);
    handleSubmit(handleSave);
  };

  React.useEffect(() => {
    const { groups, questions, answers } = initialSurvey;

    setSurvey(initialSurvey);
    setIsPreviouslyPublished(!!initialSurvey?.firstPublishTimestamp);
    setGroupArray(groups.map((groupItem) => ({ ...groupItem, type: 'group' })));
    setQuestionArray(questions.map((questionItem) => ({ ...questionItem, type: 'question' })));
    setAnswersArray(answers.map((answerItem) => ({ ...answerItem, type: 'answer' })));
  }, []);

  return (
    <EditSurveyContext.Provider value={{
      survey,
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
      isPreviouslyPublished,
    }}
    >
      {children}
    </EditSurveyContext.Provider>
  );
};
