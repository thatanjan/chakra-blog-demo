import React from 'react'
import Image from 'next/image'

import {
	Flex,
	Box,
	HStack,
	VStack,
	Text,
	Heading,
	LinkBox,
	LinkOverlay,
} from '@chakra-ui/react'

import ChakraNextLink, {
	ChakraButtonLink,
	ChakraTextLink,
} from '@/components/Links/ChakraLink'

const BlogHead = ({
	banner,
	title,
	description,
	altText,
	createdAt,
	readingTime,
	totalViews,
}) => {
	return (
		<>
			<VStack as={LinkBox} spacing='1rem' align='center' m='2rem 0'>
				<Box w='100%'>
					<Image
						src={banner}
						width={16}
						height={9}
						layout='responsive'
						alt={altText}
						objectFit='cover'
					/>
				</Box>

				<Heading>{title}</Heading>

				<HStack spacing='1rem' wrap='wrap' textTransform='uppercase'>
					<Text>{createdAt}</Text>
					<Text>{totalViews} views</Text>
					<Text>{readingTime}</Text>
				</HStack>

				<Text noOfLines={3}>{description}</Text>
			</VStack>
		</>
	)
}

export default BlogHead
