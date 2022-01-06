import { Badge, Box, Button, Heading, useColorMode, useColorModeValue, VStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { toast } from 'react-toastify'
import type { getQuizzesQuery_quizzes_data as IQuiz } from '../../gql/queries/backend/__generated__/getQuizzesQuery'

export interface QuizProps {
  quiz: IQuiz
}

const Quiz = React.forwardRef<HTMLDivElement, QuizProps>(({quiz}, ref) => {
  const {colorMode} = useColorMode()
  const bgColor = useColorModeValue('whiteAlpha.500', 'blackAlpha.500')
  const grayText = useColorModeValue('gray.500', 'gray.400')

  return (
    <Box ref={ref} maxW="sm" backdropBlur="xl" bgColor={bgColor} borderRadius="lg" overflow="hidden">
      <Image
        priority
        alt="Quiz Cover Image"
        width={quiz.attributes?.coverImage.data?.attributes?.width ?? '100px'}
        height={quiz.attributes?.coverImage.data?.attributes?.height ?? '100px'}
        src={`${quiz.attributes?.coverImage.data?.attributes?.url}`}
      />
      <VStack spacing={2} align="flex-start" p={3}>
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="purple">
            New
          </Badge>
          <Box
            color={grayText}
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {quiz.attributes?.difficulty?.difficulty} &bull; {quiz.attributes?.length} question{quiz.attributes!.length > 1 ? 's' : ''}
          </Box>
        </Box>
        <Heading size="md">{quiz.attributes?.Title}</Heading>
        <Text>{quiz.attributes?.description}</Text>
        <Button onClick={() => toast('This doesn\'t work yet :/', {position: 'bottom-center', theme: colorMode})} colorScheme="purple" isFullWidth>
          Play Now
        </Button>
      </VStack>
    </Box>
  )
})

export default Quiz
