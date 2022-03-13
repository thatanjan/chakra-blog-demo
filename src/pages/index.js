import React from 'react'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import Head from 'next/head'

import BlogPreviewList from '@/components/Blog/BlogPreviewList'

import getFiles from '@/utils/getFiles'
import readBlogFiles from '@/utils/readBlogFiles'

import Blog from '@/mongoose/Models/Blog'
import connectDB from '@/mongoose/connectDB'

const Index = ({ topBlogs, recentBlogs }) => {
	return (
		<>
			<Head>
				<title>Cules Blog</title>
			</Head>
			<BlogPreviewList blogs={topBlogs} header='top blogs' />
			<BlogPreviewList blogs={recentBlogs} header='recent blogs' />
		</>
	)
}

export const getStaticProps = async () => {
	await connectDB()

	const fileNames = getFiles('blog')

	const allParsedData = fileNames.map((fileName) => {
		const slug = fileName.replace('.mdx', '')

		const parsedData = readBlogFiles(fileName)

		const { data, content } = matter(parsedData)

		data.readingTime = readingTime(content).text
		data.slug = slug
		data.content = content

		return data
	})

	const blogBulkUpdateArray = allParsedData.map((blog) => ({
		updateOne: {
			filter: { customID: blog.customID },
			update: { $set: blog },
			upsert: true,
			setDefaultsOnInsert: true,
		},
	}))

	await Blog.bulkWrite(blogBulkUpdateArray)

	const project = {
		_id: 0,
		__v: 0,
		content: 0,
	}

	const limit = 10

	const topBlogsResult = await Blog.find({}, project)
		.sort('-totalViews')
		.limit(limit)

	const recentBlogsResult = await Blog.find({}, project)
		.sort('-createdAt')
		.limit(limit)

	const topBlogs = topBlogsResult.map((blog) => {
		const blogObject = blog.toObject()
		blogObject.createdAt = blogObject.createdAt.toDateString()

		return blogObject
	})

	const recentBlogs = recentBlogsResult.map((blog) => {
		const blogObject = blog.toObject()
		blogObject.createdAt = blogObject.createdAt.toDateString()

		return blogObject
	})

	return {
		props: {
			topBlogs,
			recentBlogs,
		},
	}
}

export default Index
