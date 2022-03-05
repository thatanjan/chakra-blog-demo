import React from 'react'
import Image from 'next/image'
import { nanoid } from 'nanoid'

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

const BlogPreviewCard = () => {
	return (
		<VStack as={LinkBox} spacing='1rem' align='start' mb='2rem'>
			<Box w='100%'>
				<Image
					src='/tw_2.jpg'
					width={16}
					height={9}
					layout='responsive'
					alt=''
					objectFit='cover'
				/>
			</Box>

			<ChakraNextLink ChakraComponent={Heading} href='/adf' overlay>
				lorem ipsum dolor sit amet consectetur adipisicing elit.
			</ChakraNextLink>

			<HStack textTransform='uppercase'>
				<ChakraTextLink href='#'>Category</ChakraTextLink>

				{[new Date().toDateString(), '123 views', '3 min read'].map((item) => (
					<Text key={nanoid()}>{item}</Text>
				))}
			</HStack>

			<Text noOfLines={3}>
				Lorem quos optio facilis hic id ullam. Dignissimos natus earum officiis
				repellendus deserunt magnam Blanditiis saepe recusandae nisi nobis fugiat
				Repellendus itaque odit expedita eos nam! Dolore minus voluptas ipsa
				perferendis nam Id quam quia soluta minima voluptate beatae Possimus
				temporibus corporis quod illo tempore nobis! Aut quisquam minima vel
				distinctio alias. Quam ipsa at excepturi doloribus voluptate Dignissimos
				maiores illum ipsum laboriosam rem? Est magni neque perspiciatis rerum hic
				nesciunt. Velit at blanditiis odit eum fuga Voluptas minus rerum ea quas vel
				at. Adipisci est quibusdam architecto eos sequi? Quas eveniet vel ea ad
				voluptatibus! Eos similique aliquam maiores.
			</Text>

			<ChakraButtonLink href='/' justifyContent='center'>
				Read More
			</ChakraButtonLink>
		</VStack>
	)
}

export default BlogPreviewCard
