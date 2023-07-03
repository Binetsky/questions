/**
 * Тип экземпляра результата опроса
 */
export interface SurveyResult {
  _id: string;
  key: string;
  meta: string;
  timestamp: number;
  results: QuestionItem[];
}

interface QuestionItem {
  questionId: string;
  answers: AnswerItem[];
}

interface AnswerItem {
  answerId: string;
  value: boolean | string;
}
