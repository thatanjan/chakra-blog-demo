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

import ChakraNextLink from 'components/Links/ChakraLink'

const BlogSearchResult = ({ searchResults, onClose }) => {
	return searchResults.map(
		({ title, slug, createdAt, totalViews, readingTime, description }) => (
			<ChakraNextLink
				chakraLinkProps={{
					_hover: {
						textDecoration: 'none',
					},
					_focus: {
						boxShadow: 'none',
					},
				}}
				href={`/blog/${slug}`}
				key={nanoid()}
				ChakraComponent={Box}
				onClick={onClose}
			>
				<Flex
					_hover={{
						background: 'teal.500',
						color: 'white',
					}}
					sx={{
						minH: 16,
						mt: 2,
						px: 4,
						py: 2,
						alignItems: 'center',
						rounded: 'lg',
						w: '100%',
					}}
				>
					<Flex
						sx={{
							flexGrow: '1',
							flexDirection: 'column',
						}}
					>
						<Text fontWeight='semibold' fontSize='lg' noOfLines={2}>
							{title}
						</Text>

						<Text opacity='0.7' noOfLines={1} mt='.5rem'>
							{description}
						</Text>

						<HStack
							spacing='1rem'
							wrap='wrap'
							textTransform='uppercase'
							flexBasis='100%'
							fontSize='xs'
							mt='1rem'
						>
							<Text>{new Date(createdAt).toDateString()}</Text>
							<Text>{totalViews} views</Text>
							<Text>{readingTime}</Text>
						</HStack>
					</Flex>
					<Box>
						<EnterIcon ml='1rem' boxSize='1rem' />
					</Box>
				</Flex>
			</ChakraNextLink>
		)
	)
}

export default BlogSearchResult
