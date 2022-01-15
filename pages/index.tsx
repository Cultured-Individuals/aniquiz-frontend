import { Box, Container, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import QuizList from '../components/quizzes/QuizList'
import backgroundImage from '../public/assets/blurry-gradient-haikei.svg'
import circleScatter from '../public/assets/circle-scatter-haikei.svg'

const Home: NextPage = () => {  
  return (
    <Box>
      <Box>
        <Box pos="absolute" zIndex={-2} userSelect="none" w="100vw" h="100vh" p="0" m="0">
          <Image priority src={backgroundImage} alt="Luftbild des Sportplatzes" layout="fill" objectFit="cover"/>
        </Box>
        <Box backdropBlur="xl" opacity={.6} pos="absolute" zIndex={-1} userSelect="none" w="100vw" h="100vh" p="0" m="0">
          <Image priority src={circleScatter} alt="Luftbild des Sportplatzes" layout="fill" objectFit="cover"/>
        </Box>
      </Box>
      <Box p={10}>
        <Heading mb={5}>
          AniQuiz
        </Heading>
        <Container p={6} maxW="container.xl" backdropBlur="xl" borderRadius="lg" overflow="hidden">
          <QuizList/>
        </Container>
      </Box>
    </Box>
  )
}

export default Home
