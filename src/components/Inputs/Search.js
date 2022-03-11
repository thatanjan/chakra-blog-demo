import React, { useState } from 'react'
import { nanoid } from 'nanoid'

import {
	Box,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	chakra,
	Flex,
	Center,
	Text,
	HStack,
} from '@chakra-ui/react'

import { SearchIcon } from '@chakra-ui/icons'

import ChakraNextLink from 'components/Links/ChakraLink'

const EnterIcon = (props) => {
	return (
		<chakra.svg
			strokeWidth='2px'
			width='16px'
			height='16px'
			viewBox='0 0 20 20'
			{...props}
		>
			<g
				stroke='currentColor'
				fill='none'
				fillRule='evenodd'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M18 3v4c0 2-2 4-4 4H2' />
				<path d='M8 17l-6-6 6-6' />
			</g>
		</chakra.svg>
	)
}

const BlogResult = ({ searchResults }) => {
	return searchResults.map(() => (
		<ChakraNextLink
			chakraLinkProps={{
				_hover: {
					textDecoration: 'none',
				},
			}}
			href='/'
			key={nanoid()}
			ChakraComponent={Box}
		>
			<Flex
				_hover={{
					background: 'teal.500',
				}}
				sx={{
					minH: 16,
					mt: 2,
					px: 4,
					py: 2,
					alignItems: 'center',
					rounded: 'lg',
					fontWeight: 'semibold',
					fontSize: 'lg',
				}}
			>
				<Text flexGrow={1} noOfLines={2}>
					This is a blog result blog result
				</Text>

				<EnterIcon ml='1rem' />
			</Flex>

			{/* <HStack spacing='1rem' wrap='wrap' textTransform='uppercase'> */}
			{/* 	<Text>THU MARCH 21, 2020</Text> */}
			{/* 	<Text>5 views</Text> */}
			{/* 	<Text>5 min read</Text> */}
			{/* </HStack> */}
		</ChakraNextLink>
	))
}

const Search = ({ onClose, isOpen }) => {
	const [queryText, setQueryText] = useState('')

	const [searchResults, setSearchResults] = useState(Array(10).fill(''))

	const handleChange = (e) => {
		setQueryText(e.target.value)
	}

	return (
		<div>
			<Modal onClose={onClose} isOpen={isOpen} scrollBehavior='inside'>
				<ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px)' />
				<ModalContent
					rounded='lg'
					overflow='hidden'
					top='4vh'
					bg='transparent'
					shadow='lg'
					maxW='600px'
					width='90%'
				>
					<Flex pos='relative' align='stretch'>
						<chakra.input
							autoComplete='off'
							autoCorrect='off'
							spellCheck='false'
							maxLength={64}
							sx={{
								w: '100%',
								h: '68px',
								pl: '68px',
								fontWeight: 'medium',
								outline: 0,
								bg: 'white',
								'.chakra-ui-dark &': { bg: 'gray.700' },
							}}
							placeholder='Search blogs'
							value={queryText}
							onChange={handleChange}
						/>
						<Center pos='absolute' left={7} h='68px'>
							<SearchIcon color='teal.500' boxSize='20px' />
						</Center>
					</Flex>

					<ModalBody maxH='70vh' p='0'>
						<Box
							sx={{
								px: 4,
								bg: 'white',
								'.chakra-ui-dark &': { bg: 'gray.700' },
							}}
						>
							<Box as='ul' borderTopWidth='1px' pt={2} pb={4}>
								<BlogResult searchResults={searchResults} />
							</Box>
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	)
}

export default Search
