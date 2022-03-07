import React from 'react'
import { nanoid } from 'nanoid'

import { Box } from '@chakra-ui/react'

import BlogPreviewCard from '@/components/Blog/BlogPreviewCard'

const BlogPreviewList = ({ blogs }) => {
	return (
		<>
			<Box m='2rem 0'>
				{blogs.map((blog) => (
					<BlogPreviewCard {...blog} key={nanoid()} />
				))}
			</Box>
		</>
	)
}

export default BlogPreviewList
