/**
 * Тип экземпляра результата опроса
 */
export interface SurveyResult {
  key: string;
  meta: string;
  timestamp: number;
  id: string;
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
