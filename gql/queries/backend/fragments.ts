import { gql } from '@apollo/client'

export const MEDIA_FRAGMENT = gql`
fragment MediaFragment on UploadFile {
  width
  height
  mime
  url
}
`
export const QUIZ_FRAGMENT = gql`
fragment QuizFragment on Quiz {
  Title
  description
  length
  coverImage {
    data {
      attributes {
        width
        height
        mime
        url
      }
    }
  }
  difficulty {
    difficulty
  }
  questions {
    data {
      attributes {
        questionText
        questionType {
          questionType
        }
        hint
        difficulty {
          difficulty
        }
        possibleAnswers,
        correctAnswers,
        media {
          data {
            attributes {
              ...MediaFragment
            }
          }
        }
        contentType
      }
    }
  }
}

${MEDIA_FRAGMENT}
`

