import { gql, useQuery } from '@apollo/client'
import { apolloClient } from '../../client'
import { QUIZ_FRAGMENT } from './fragments'
import type { getQuizzesQuery } from './__generated__/getQuizzesQuery'


export const GET_QUIZZES_QUERY = gql`
query getQuizzesQuery {
  quizzes {
    data {
      id
      attributes {
       ...QuizFragment
    	}
  	}
  }
}

${QUIZ_FRAGMENT}
`

export function getQuizzes() {
  return apolloClient.query<getQuizzesQuery>({
    query: GET_QUIZZES_QUERY,
    context: { client: 'backend' },
  })
}

export function useGetQuizzes() {
  return useQuery<getQuizzesQuery>(GET_QUIZZES_QUERY, {
    context: { client: 'backend' },
  })
}