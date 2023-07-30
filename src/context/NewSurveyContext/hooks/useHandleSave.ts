import { transformAnswersData, transformGroupsData, transformQuestionsData } from '@context/NewSurveyContext/helpers';
import { SurveyItem } from '@models/survey';
import { sendChanges } from '@helpers/sendChanges';
import { ApiEndpoints } from '@constants';
import { FieldValues } from 'react-hook-form';
import { UseHandleSaveParams, UseHandleSaveReturn } from '@context/NewSurveyContext/types';

/**
 * Хук управления сохранением опроса
 * @param groupArray
 * @param questionArray
 * @param answersArray
 * @param publishTimestamp
 * @param data
 */
export const useHandleSave = (
  {
    groupArray, questionArray, answersArray, publishTimestamp,
  }: UseHandleSaveParams,
): UseHandleSaveReturn => {
  const handleSave = async (data: FieldValues) => {
    const intro = {
      title: data['intro-title'],
      subtitle: data['intro-subtitle'] || null,
    };

    const outro = {
      title: data['outro-title'],
      subtitle: data['outro-subtitle'] || null,
    };

    const groups = transformGroupsData({ groupArray, data });

    const questions = transformQuestionsData({
      groupArray, questionArray, data,
    });

    const answers = transformAnswersData({
      groupArray, questionArray, answersArray, data,
    });

    const readySurvey = {
      createTimestamp: new Date().valueOf(),
      author: 'Константинопольский Константин Константинович',
      firstPublishTimestamp: publishTimestamp,
      publishTimestamp,
      intro,
      outro,
      questions,
      answers,
      groups,
      isArchived: false,
      isPublished: !!publishTimestamp,
      isDeleted: false,
    } as unknown as SurveyItem;

    const savedSurvey = await sendChanges(`${ApiEndpoints.SurveysAdmin}`, readySurvey);

    // Todo: в случае успеха сделать редирект на страницу просмотра статистики по созданному опросу
    console.log(savedSurvey);
  };

  return ({ handleSave });
};
