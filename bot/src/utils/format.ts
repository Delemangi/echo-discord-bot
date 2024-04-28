import { type Question } from '../schemas/QuestionSchema.js';

export const getQuestionFormat = (question: Question) => {
  return `
  __## ${question.name}__

  ${question.content}
  `;
};