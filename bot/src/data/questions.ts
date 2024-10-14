import { getStrapiUrl } from '../config/environment.js';
import { StrapiQuestionSchema } from '../schemas/QuestionSchema.js';

export const getQuestionsByTerm = async (term: string) => {
  const strapiUrl = getStrapiUrl();
  const questions = await fetch(
    `${strapiUrl}/api/questions?sort=name:asc&populate=files&filters[name][$containsi]=${term}`,
  );
  const parsedData = await questions.json();
  const parsedQuestions = StrapiQuestionSchema.parse(parsedData);

  return parsedQuestions.data;
};

export const getAllQuestions = async () => {
  const strapiUrl = getStrapiUrl();
  const questions = await fetch(`${strapiUrl}/api/questions?sort=name:asc`);
  const parsedData = await questions.json();
  const parsedQuestions = StrapiQuestionSchema.parse(parsedData);

  return parsedQuestions.data;
};
