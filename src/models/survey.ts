import { model, Schema } from 'mongoose';

/**
 * Тип экземпляра опроса
 */
export interface SurveyItem {
  _id?: string;
  createTimestamp: number;
  author: string;
  firstPublishTimestamp: number | null;
  publishTimestamp: number | null;
  intro: CommonContent;
  outro: CommonContent;
  questions: QuestionItem[];
  answers: AnswerItem[];
  groups: GroupItem[];
  isArchived: boolean;
  isPublished: boolean;
  isDeleted: boolean;
}

export interface CommonContent {
  title: string;
  subtitle: string | null;
  image: string | null;
}

export interface QuestionItem extends CommonContent {
  id: number;
  groupId: number;
  minAnswers: number;
  maxAnswers: number;
}

export interface AnswerItem extends CommonContent {
  id: number;
  questionId: number;
  groupId: number;
  answerType: 'closed' | 'open';
}

export interface GroupItem extends CommonContent {
  id: number;
}

export const Survey = new Schema<SurveyItem>({
  author: {
    type: String,
    required: true,
  },
  createTimestamp: {
    type: Number,
    required: true,
  },
  firstPublishTimestamp: {
    type: Number || null,
    required: true,
  },
  publishTimestamp: {
    type: Number || null,
    required: true,
  },
  isArchived: {
    type: Boolean,
    default: false,
    required: true,
  },
  isPublished: {
    type: Boolean,
    default: false,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
    required: true,
  },
  intro: {
    type: {
      title: String,
      subtitle: String || null,
      image: String || null,
    },
    required: true,
  },
  outro: {
    type: {
      title: String,
      subtitle: String || null,
      image: String || null,
    },
    required: true,
  },
  groups: {
    type: [{
      id: Number,
      title: String,
      description: String || null,
      image: String || null,
    }],
    required: true,
  },
  questions: {
    type: [{
      id: Number,
      groupId: Number,
      minAnswers: Number,
      maxAnswers: Number,
      title: String,
      description: String || null,
    }],
    required: true,
  },
  answers: {
    type: [{
      id: Number,
      questionId: Number,
      groupId: Number,
      title: String,
      answerType: 'closed' || 'open',
      image: String || null,
    }],
    required: true,
  },
});

export const SurveysListModel = model<QuestionItem>('surveys', Survey);
