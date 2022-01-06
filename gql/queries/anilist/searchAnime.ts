import { gql, useQuery } from '@apollo/client'
import { apolloClient } from '../../client'
import type { searchAnime, searchAnimeVariables } from './__generated__/searchAnime'

export const SEARCH_ANIME = gql`
query searchAnime($search: String) {
  anime: Page(perPage: 3) {
    pageInfo {
      total
    }
    results: media(sort:POPULARITY_DESC, type: ANIME, search: $search) {
      id
      format
      coverImage {
        medium
      }
      title {
        english,
        romaji
      }
    }
  }
}
`

export function searchAnime(search: string) {
  return apolloClient.query<searchAnime, searchAnimeVariables>({
    query: SEARCH_ANIME,
    variables: { search },
    context: { client: 'anilist' },
  })
}

export function useSearchAnime(search: string) {
  return useQuery<searchAnime, searchAnimeVariables>(SEARCH_ANIME, {
    variables: { search },
    context: { client: 'anilist' },
  })
}


