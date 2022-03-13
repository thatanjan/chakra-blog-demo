import React from 'react'
import { nanoid } from 'nanoid'

import { Box, Heading } from '@chakra-ui/react'

import BlogPreviewCard from '@/components/Blog/BlogPreviewCard'

const BlogPreviewList = ({ blogs, header }) => {
	return (
		<Box mt={8} mb={16}>
			<Heading
				sx={{
					textTransform: 'capitalize',
					mb: 8,
					fontSize: '5xl',
				}}
			>
				{header}
			</Heading>

			<Box mt={8}>
				{blogs.map((blog) => (
					<BlogPreviewCard {...blog} key={nanoid()} />
				))}
			</Box>
		</Box>
	)
}

export default BlogPreviewList
