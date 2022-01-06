import { Badge, Box, Button, Heading, Text, useColorMode, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { useGetQuizzes } from '../gql/queries/backend/getQuizzes'

const Home: NextPage = () => {
  const { data, loading, error } = useGetQuizzes()
  const {colorMode} = useColorMode()

  if (loading) return <p>Loading...</p>

  return (
    <Box p={10}>
      <Heading mb={5}>
        AniQuiz
      </Heading>
      {
      data?.quizzes?.data.map(quiz => (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" key={quiz.id} overflow="hidden">
          <Image
            alt="Quiz Cover Image"
            width={quiz.attributes?.coverImage.data?.attributes?.width ?? '100px'}
            height={quiz.attributes?.coverImage.data?.attributes?.height ?? '100px'}
            src={`${quiz.attributes?.coverImage.data?.attributes?.url}`}
          />
          <VStack spacing={2} align="flex-start" p={2}>
            <Box display="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="purple">
                New
              </Badge>
              <Box
                color="gray.500"
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
      ))
    }
    </Box>
  )
}

export default Home
