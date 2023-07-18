/**
 * Тип экземпляра результата опроса
 */
export interface SurveyResult {
  surveyId: string;
  clientKey: number;
  meta: Meta;
  timestamp: number;
  results: Record<number | string, number[]>[];
}

interface Meta {
  cookies: string;
  browser: Browser;
  os: string;
}

interface Browser {
  name: string;
  version: string;
}
