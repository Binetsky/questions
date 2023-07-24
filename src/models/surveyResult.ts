import { model, Schema } from 'mongoose';

/**
 * Тип экземпляра результата опроса
 */
export interface SurveyResult {
  surveyId: string;
  clientKey: number;
  meta: Meta;
  timestamp: number;
  surveySource: string;
  results: Record<number | string, number[]>[];
  _id?: string;
}

interface Meta {
  // Todo: добавить получение региона
  cookies: string;
  browser: Browser;
  os: string;
}

interface Browser {
  name: string;
  version: string;
}

export const Result = new Schema<SurveyResult>({
  surveyId: {
    type: String,
    required: true,
  },
  clientKey: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Number,
    required: true,
  },
  surveySource: {
    type: String,
    required: true,
  },
  meta: {
    type: {
      cookies: String,
      browser: {
        name: String,
        version: String,
      },
      os: String,
    },
    required: true,
  },
  results: {
    type: [Object],
    required: true,
  },
});

export const ResultListModel = model<SurveyResult>('results', Result);
