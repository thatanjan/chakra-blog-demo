import React, { useState } from 'react'

import {
	Box,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	chakra,
	Flex,
	Center,
} from '@chakra-ui/react'

import { SearchIcon } from '@chakra-ui/icons'

const Search = ({ onClose, isOpen }) => {
	const [queryText, setQueryText] = useState('')

	const [searchResults, setSearchResults] = useState([])

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
								{Array(10)
									.fill(0)
									.map(() => (
										<h1>Hello</h1>
									))}
							</Box>
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	)
}

export default Search
