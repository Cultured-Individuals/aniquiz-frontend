/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTENUMSDIFFICULTY_DIFFICULTY, ENUM_COMPONENTENUMSQUESTIONTYPE_QUESTIONTYPE, ENUM_QUESTION_CONTENTTYPE } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getQuizzesQuery
// ====================================================

export interface getQuizzesQuery_quizzes_data_attributes_coverImage_data_attributes {
  __typename: "UploadFile";
  width: number | null;
  height: number | null;
  mime: string;
  url: string;
}

export interface getQuizzesQuery_quizzes_data_attributes_coverImage_data {
  __typename: "UploadFileEntity";
  attributes: getQuizzesQuery_quizzes_data_attributes_coverImage_data_attributes | null;
}

export interface getQuizzesQuery_quizzes_data_attributes_coverImage {
  __typename: "UploadFileEntityResponse";
  data: getQuizzesQuery_quizzes_data_attributes_coverImage_data | null;
}

export interface getQuizzesQuery_quizzes_data_attributes_difficulty {
  __typename: "ComponentEnumsDifficulty";
  difficulty: ENUM_COMPONENTENUMSDIFFICULTY_DIFFICULTY;
}

export interface getQuizzesQuery_quizzes_data_attributes_questions_data_attributes_questionType {
  __typename: "ComponentEnumsQuestionType";
  questionType: ENUM_COMPONENTENUMSQUESTIONTYPE_QUESTIONTYPE;
}

export interface getQuizzesQuery_quizzes_data_attributes_questions_data_attributes_difficulty {
  __typename: "ComponentEnumsDifficulty";
  difficulty: ENUM_COMPONENTENUMSDIFFICULTY_DIFFICULTY;
}

export interface getQuizzesQuery_quizzes_data_attributes_questions_data_attributes_media_data_attributes {
  __typename: "UploadFile";
  width: number | null;
  height: number | null;
  mime: string;
  url: string;
}

export interface getQuizzesQuery_quizzes_data_attributes_questions_data_attributes_media_data {
  __typename: "UploadFileEntity";
  attributes: getQuizzesQuery_quizzes_data_attributes_questions_data_attributes_media_data_attributes | null;
}

export interface getQuizzesQuery_quizzes_data_attributes_questions_data_attributes_media {
  __typename: "UploadFileRelationResponseCollection";
  data: getQuizzesQuery_quizzes_data_attributes_questions_data_attributes_media_data[];
}

export interface getQuizzesQuery_quizzes_data_attributes_questions_data_attributes {
  __typename: "Question";
  questionText: string;
  questionType: getQuizzesQuery_quizzes_data_attributes_questions_data_attributes_questionType | null;
  hint: string | null;
  difficulty: getQuizzesQuery_quizzes_data_attributes_questions_data_attributes_difficulty | null;
  possibleAnswers: any;
  correctAnswers: any;
  media: getQuizzesQuery_quizzes_data_attributes_questions_data_attributes_media | null;
  contentType: ENUM_QUESTION_CONTENTTYPE | null;
}

export interface getQuizzesQuery_quizzes_data_attributes_questions_data {
  __typename: "QuestionEntity";
  attributes: getQuizzesQuery_quizzes_data_attributes_questions_data_attributes | null;
}

export interface getQuizzesQuery_quizzes_data_attributes_questions {
  __typename: "QuestionRelationResponseCollection";
  data: getQuizzesQuery_quizzes_data_attributes_questions_data[];
}

export interface getQuizzesQuery_quizzes_data_attributes {
  __typename: "Quiz";
  Title: string;
  description: string;
  length: number;
  coverImage: getQuizzesQuery_quizzes_data_attributes_coverImage;
  difficulty: getQuizzesQuery_quizzes_data_attributes_difficulty | null;
  questions: getQuizzesQuery_quizzes_data_attributes_questions | null;
}

export interface getQuizzesQuery_quizzes_data {
  __typename: "QuizEntity";
  id: string | null;
  attributes: getQuizzesQuery_quizzes_data_attributes | null;
}

export interface getQuizzesQuery_quizzes {
  __typename: "QuizEntityResponseCollection";
  data: getQuizzesQuery_quizzes_data[];
}

export interface getQuizzesQuery {
  quizzes: getQuizzesQuery_quizzes | null;
}
