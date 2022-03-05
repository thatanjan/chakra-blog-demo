import React from 'react'
import { nanoid } from 'nanoid'

import { Box } from '@chakra-ui/react'

import BlogPreviewCard from '@/components/Blog/BlogPreviewCard'

const BlogPreviewList = () => {
	return (
		<>
			<Box m='2rem 0'>
				{Array(10)
					.fill(0)
					.map(() => (
						<BlogPreviewCard key={nanoid()} />
					))}
			</Box>
		</>
	)
}

export default BlogPreviewList
