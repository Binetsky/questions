import { AnswerItem, GroupItem, QuestionItem } from '@models/survey';

export interface GroupEditItem extends GroupItem {
  type: 'group';
}

export interface QuestionEditItem extends QuestionItem {
  type: 'question';
}

export interface AnswerEditItem extends AnswerItem {
  type: 'answer';
}
