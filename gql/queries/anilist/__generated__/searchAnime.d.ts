/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MediaFormat } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchAnime
// ====================================================

export interface searchAnime_anime_pageInfo {
  __typename: "PageInfo";
  /**
   * The total number of items
   */
  total: number | null;
}

export interface searchAnime_anime_results_coverImage {
  __typename: "MediaCoverImage";
  /**
   * The cover image url of the media at medium size
   */
  medium: string | null;
}

export interface searchAnime_anime_results_title {
  __typename: "MediaTitle";
  /**
   * The official english title
   */
  english: string | null;
  /**
   * The romanization of the native language title
   */
  romaji: string | null;
}

export interface searchAnime_anime_results {
  __typename: "Media";
  /**
   * The id of the media
   */
  id: number;
  /**
   * The format the media was released in
   */
  format: MediaFormat | null;
  /**
   * The cover images of the media
   */
  coverImage: searchAnime_anime_results_coverImage | null;
  /**
   * The official titles of the media in various languages
   */
  title: searchAnime_anime_results_title | null;
}

export interface searchAnime_anime {
  __typename: "Page";
  /**
   * The pagination information
   */
  pageInfo: searchAnime_anime_pageInfo | null;
  results: (searchAnime_anime_results | null)[] | null;
}

export interface searchAnime {
  anime: searchAnime_anime | null;
}

export interface searchAnimeVariables {
  search?: string | null;
}
