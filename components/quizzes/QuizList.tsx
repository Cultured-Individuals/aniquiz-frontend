import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useGetQuizzes } from '../../gql/queries/backend/getQuizzes'
import { MotionGrid, MotionQuiz } from '../motion'


const QuizList = () => {
  const { data, loading, error } = useGetQuizzes()

  const container = {
    hidden: { opacity: 0, rotate: 90 },
    show: {
      rotate: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  
  const item = {
    hidden: { opacity: 0, rotate: 90 },
    show: { opacity: 1, rotate: 0 },
  }
  
  if (loading) return <Center><Spinner/>Loading Quizzes...</Center>

  return (
    <MotionGrid w="100%" justifyContent="center" gap={4} gridTemplateColumns="repeat(auto-fill, var(--chakra-sizes-sm))" initial="hidden" animate="show" variants={container}>
      {
      data?.quizzes?.data.map(quiz => (
        <MotionQuiz variants={item} quiz={quiz} key={quiz.id}/>
      ))
    }
    </MotionGrid>
  )
}

export default QuizList
