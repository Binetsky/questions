import type { NextApiRequest, NextApiResponse } from 'next';
import { SurveyItem } from '@models/survey';
import { SurveyResult } from '@models/surveyResult';

interface EditableSurveyItem extends Omit<SurveyItem, '_id'> {
  _id?: string;
}

interface EditableSurveyResult extends Omit<SurveyResult, '_id'> {
  _id?: string;
}

export type EditedDocumentType = EditableSurveyItem | EditableSurveyResult;

/**
 * Общий тип документов коллекций учитывая _id документа
 */
export type CommonDocumentStore = SurveyItem | SurveyResult;
/**
 * Тип параметров хелпера SaveDocument
 */
export interface SaveDocumentParams {
  editedDocument: CommonDocumentStore;
  res: NextApiResponse;
  collectionName: string;
}

/**
 * Тип параметров хелпера DeleteDocument
 */
export interface DeleteDocumentParams {
  deletedDocumentId: string;
  res: NextApiResponse;
  collectionName: string;
}

/**
 * Тип праметров хелпера ApiHandler
 */
export interface ApiHandlerParams {
  req: NextApiRequest;
  res: NextApiResponse;
  collectionName: string;
}
