import React from 'react';
import { TabPanel } from '@frontend/uikit-rbc/TabPanel';
import { TableBody } from '@layout/TableBody';
import { ComponentWithChildren } from '@frontend/uikit-rbc/types';
import { adminUserKey, ApiEndpoints } from '@constants';
import { SurveyItem } from '@models/survey';
import { SurveyResult } from '@models/surveyResult';
import styles from './styles.module.scss';

/**
 * Страница со списками опросов
 * @returns React.FC
 */
export const MainPageFeature:React.FC<ComponentWithChildren> = () => {
  const [currentTab, setCurrentTab] = React.useState(0);
  const [publishedSurveys, setPublishedSurveys] = React.useState<SurveyItem[]>([]);
  const [unpublishedSurveys, setUnpublishedSurveys] = React.useState<SurveyItem[]>([]);
  const [deletedSurveys, setDeletedSurveys] = React.useState<SurveyItem[]>([]);
  const [archivedSurveys, setArchivedSurveys] = React.useState<SurveyItem[]>([]);
  const [surveys, setSurveys] = React.useState<SurveyItem[]>([]);
  const [results, setResults] = React.useState<SurveyResult[]>([]);

  const getSurveysList = async () => {
    const responseSurveys: SurveyItem[] = await fetch(ApiEndpoints.SurveysAdmin, { headers: { userkey: adminUserKey } })
      .then((data) => data.json());
    const responseResults: SurveyResult[] = await fetch(ApiEndpoints.ResultsAdmin, { headers: { userkey: adminUserKey } })
      .then((data) => data.json());

    setPublishedSurveys(responseSurveys.filter((responseItem) => responseItem.isPublished));
    setUnpublishedSurveys(responseSurveys.filter((responseItem) => !responseItem.isPublished && !responseItem.isArchived && !responseItem.isDeleted));
    setDeletedSurveys(responseSurveys.filter((responseItem) => responseItem.isDeleted));
    setArchivedSurveys(responseSurveys.filter((responseItem) => responseItem.isArchived));
    setSurveys(responseSurveys);
    setResults(responseResults);
  };

  const tabList = ['Опубликованные', 'Не опубликованные', 'Удаленные', 'Архив', 'Все'];

  const changeTab = (tab: number) => {
    setCurrentTab(tab);
  };

  const tableBodyContent = (tabNumber: number): SurveyItem[] => {
    if (tabNumber === 0) {
      return publishedSurveys;
    }

    if (tabNumber === 1) {
      return unpublishedSurveys;
    }

    if (tabNumber === 2) {
      return deletedSurveys;
    }

    if (tabNumber === 3) {
      return archivedSurveys;
    }

    if (tabNumber === 4) {
      return surveys;
    }

    return [];
  };

  React.useEffect(() => {
    getSurveysList();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles['main-content']}>
        <TabPanel
          tabList={tabList}
          activeTab={currentTab}
          changeTab={changeTab}
          className="p-b-24"
        />
        <TableBody
          surveys={tableBodyContent(currentTab)}
          results={results}
        />
      </div>
    </div>
  );
};
