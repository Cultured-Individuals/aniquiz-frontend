/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTENUMSDIFFICULTY_DIFFICULTY, ENUM_COMPONENTENUMSQUESTIONTYPE_QUESTIONTYPE, ENUM_QUESTION_CONTENTTYPE } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: QuizFragment
// ====================================================

export interface QuizFragment_coverImage_data_attributes {
  __typename: "UploadFile";
  width: number | null;
  height: number | null;
  mime: string;
  url: string;
}

export interface QuizFragment_coverImage_data {
  __typename: "UploadFileEntity";
  attributes: QuizFragment_coverImage_data_attributes | null;
}

export interface QuizFragment_coverImage {
  __typename: "UploadFileEntityResponse";
  data: QuizFragment_coverImage_data | null;
}

export interface QuizFragment_difficulty {
  __typename: "ComponentEnumsDifficulty";
  difficulty: ENUM_COMPONENTENUMSDIFFICULTY_DIFFICULTY;
}

export interface QuizFragment_questions_data_attributes_questionType {
  __typename: "ComponentEnumsQuestionType";
  questionType: ENUM_COMPONENTENUMSQUESTIONTYPE_QUESTIONTYPE;
}

export interface QuizFragment_questions_data_attributes_difficulty {
  __typename: "ComponentEnumsDifficulty";
  difficulty: ENUM_COMPONENTENUMSDIFFICULTY_DIFFICULTY;
}

export interface QuizFragment_questions_data_attributes_media_data_attributes {
  __typename: "UploadFile";
  width: number | null;
  height: number | null;
  mime: string;
  url: string;
}

export interface QuizFragment_questions_data_attributes_media_data {
  __typename: "UploadFileEntity";
  attributes: QuizFragment_questions_data_attributes_media_data_attributes | null;
}

export interface QuizFragment_questions_data_attributes_media {
  __typename: "UploadFileRelationResponseCollection";
  data: QuizFragment_questions_data_attributes_media_data[];
}

export interface QuizFragment_questions_data_attributes {
  __typename: "Question";
  questionText: string;
  questionType: QuizFragment_questions_data_attributes_questionType | null;
  hint: string | null;
  difficulty: QuizFragment_questions_data_attributes_difficulty | null;
  possibleAnswers: any;
  correctAnswers: any;
  media: QuizFragment_questions_data_attributes_media | null;
  contentType: ENUM_QUESTION_CONTENTTYPE | null;
}

export interface QuizFragment_questions_data {
  __typename: "QuestionEntity";
  attributes: QuizFragment_questions_data_attributes | null;
}

export interface QuizFragment_questions {
  __typename: "QuestionRelationResponseCollection";
  data: QuizFragment_questions_data[];
}

export interface QuizFragment {
  __typename: "Quiz";
  Title: string;
  description: string;
  length: number;
  coverImage: QuizFragment_coverImage;
  difficulty: QuizFragment_difficulty | null;
  questions: QuizFragment_questions | null;
}
