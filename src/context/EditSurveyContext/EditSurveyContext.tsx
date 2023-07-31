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

interface EditSurveyState extends CommonStatesAndDispatchers, UseGroupsToggleReturn,
  UseQuestionsToggleReturn, UseAnswersToggleReturn, UseMoveComponentsReturn {
  survey: SurveyItem | null;
  handleSave: (data: FieldValues) => Promise<void>;
  handleSaveAndPublish: () => void;
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
  const [publishTimestamp, setPublishTimestamp] = React.useState<number | null>(null);
  const { control, handleSubmit } = useForm({});

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
    groupArray, questionArray, answersArray, publishTimestamp, surveyId: survey?._id,
  });

  // Хелпер сохранения с публикацией опроса
  const handleSaveAndPublish = () => {
    setPublishTimestamp(new Date().valueOf());
    handleSubmit(handleSave);
    console.log('handleSaveAndPublish');
  };

  React.useEffect(() => {
    const { groups, questions, answers } = initialSurvey;

    setSurvey(initialSurvey);
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
    }}
    >
      {children}
    </EditSurveyContext.Provider>
  );
};
