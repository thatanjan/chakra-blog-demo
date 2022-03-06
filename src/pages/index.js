import React from 'react'
import matter from 'gray-matter'
import readingTime from 'reading-time'

import BlogPreviewList from '@/components/Blog/BlogPreviewList'

import getFiles from '@/utils/getFiles'
import readBlogFiles from '@/utils/readBlogFiles'

const Index = () => {
	return (
		<div>
			<BlogPreviewList />
		</div>
	)
}

export const getStaticProps = async () => {
	const fileNames = getFiles('blog')

	const allParsedData = fileNames.map((fileName) => {
		const slug = fileName.replace('.mdx', '')

		const parsedData = readBlogFiles(fileName)

		const { data, content } = matter(parsedData)

		data.readingTime = readingTime(content).text
		data.slug = slug

		return {
			data,
			content,
		}
	})

	return {
		props: {},
	}
}

export default Index
