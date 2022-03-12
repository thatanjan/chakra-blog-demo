import React, { useState, useEffect } from 'react'
import axios from 'axios'

import {
	Box,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	chakra,
	Flex,
	Center,
	useColorMode,
} from '@chakra-ui/react'

import { SearchIcon } from '@chakra-ui/icons'

import BlogSearchResult from 'components/Blog/BlogSearchResult'

const Search = ({ onClose, isOpen }) => {
	const [queryText, setQueryText] = useState('')

	const [searchResults, setSearchResults] = useState([])

	const { colorMode } = useColorMode()

	const backgroundColor = {
		light: 'white',
		dark: 'gray.700',
	}

	const handleChange = (e) => setQueryText(e.target.value)

	useEffect(() => {
		if (!queryText) return false

		const cancelTokenSource = axios.CancelToken.source()

		;(async () => {
			try {
				const { data } = await axios.get('/api/search', {
					params: {
						query: queryText,
					},
				})

				setSearchResults(data)
			} catch (_) {}
		})()

		return () => cancelTokenSource.cancel()
	}, [queryText])

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
								bg: backgroundColor[colorMode],
							}}
							placeholder='Search blogs'
							value={queryText}
							onChange={handleChange}
						/>
						<Center pos='absolute' left={7} h='68px'>
							<SearchIcon color='teal.500' boxSize='20px' />
						</Center>
					</Flex>

					{searchResults.length > 0 && (
						<ModalBody maxH='70vh' p='0'>
							<Box
								sx={{
									px: 4,
									bg: backgroundColor[colorMode],
								}}
							>
								<Box as='ul' borderTopWidth='1px' pt={2} pb={4}>
									<BlogSearchResult onClose={onClose} searchResults={searchResults} />
								</Box>
							</Box>
						</ModalBody>
					)}
				</ModalContent>
			</Modal>
		</div>
	)
}

export default Search
