/**
 * Тип экземпляра опроса
 */
export interface SurveyItem {
  id: string;
  createTimestamp: number;
  firstPublishTimestamp: number | null;
  publishTimestamp: number | null;
  intro: CommonContent;
  outro: CommonContent;
  questions: QuestionItem[];
  groups: GroupItem[];
  isArchived?: boolean;
  isPublished?: boolean;
}

interface CommonContent {
  title: string;
  description?: string;
  image?: string;
}

interface QuestionItem extends CommonContent {
  id: string;
  group: GroupItem;
  answerType: 'single' | 'multiple' | 'open';
  answers: AnswerItem[];
}

interface AnswerItem extends CommonContent {
  id: string;
}

interface GroupItem extends CommonContent {
  id: string;
}
