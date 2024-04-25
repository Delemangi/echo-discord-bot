import { getStrapiUrl } from '../config/environment.js';
import { QuestionSchema } from '../schemas/QuestionSchema.js';

export const getQuestionsByTerm = async (term: string) => {
  const strapiUrl = getStrapiUrl();
  const questions = await fetch(
    `${strapiUrl}/api/questions?filters[Name][$containss]=${term}`,
  );
  const parsedData = await questions.json();
  const parsedQuestions = QuestionSchema.parse(parsedData);

  return parsedQuestions.data.map((question) => question.attributes);
};
