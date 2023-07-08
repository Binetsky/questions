import { Schema } from 'mongoose';

/**
 * Тип экземпляра опроса
 */
export interface SurveyItem {
  _id: string;
  createTimestamp: number;
  author: string;
  firstPublishTimestamp: number | null;
  publishTimestamp: number | null;
  intro: CommonContent;
  outro: CommonContent;
  questions: QuestionItem[];
  groups: GroupItem[];
  isArchived: boolean;
  isPublished: boolean;
}

interface CommonContent {
  title: string;
  description?: string;
  image?: string;
}

interface QuestionItem extends CommonContent {
  id: string;
  group: GroupItem;
  answers: AnswerItem[];
  minAnswers: number;
  maxAnswers: number;
}

interface AnswerItem extends CommonContent {
  id: string;
  answerType: 'closed' | 'open';
}

interface GroupItem extends CommonContent {
  id: string;
}

export const ChatsList = new Schema<SurveyItem>({
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
  intro: {
    type: {
      title: String,
      description: String || null,
      image: String || null,
    },
    required: true,
  },
  outro: {
    type: {
      title: String,
      description: String || null,
      image: String || null,
    },
    required: true,
  },
  groups: {
    type: [{
      id: String,
      title: String,
      description: String || null,
      image: String || null,
    }],
    required: true,
  },
  questions: {
    type: [{
      id: String,
      minAnswers: Number,
      maxAnswers: Number,
      group: {
        id: String,
        title: String,
        description: String || null,
        image: String || null,
      },
      answers: [{
        id: String,
        title: String,
        description: String || null,
        answerType: 'closed' || 'open',
        image: String || null,
      }],
    }],
    required: true,
  },
});
