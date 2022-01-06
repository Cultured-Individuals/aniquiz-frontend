import type { BoxProps, ContainerProps, FlexProps, GridProps } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import { Box, Flex } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { QuizProps } from './quizzes/Quiz'
import Quiz from './quizzes/Quiz'

export const MotionContainer = motion<ContainerProps>(Container)
export const MotionFlex = motion<FlexProps>(Flex)
export const MotionBox = motion<BoxProps>(Box)
export const MotionGrid = motion<GridProps>(Grid)
export const MotionQuiz = motion<QuizProps>(Quiz)