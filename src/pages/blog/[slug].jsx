import React, { useEffect } from 'react'

import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import Blog from 'mongoose/Models/Blog'
import connectDB from 'mongoose/connectDB'

const BlogPage = ({ mdxSource }) => {
	return (
		<>
			<MDXRemote {...mdxSource} />
		</>
	)
}

export const getStaticProps = async ({ params: { slug } }) => {
	await connectDB()

	const project = {
		_id: 0,
		__v: 0,
	}

	const result = await Blog.findOne({ slug }, project)

	const { content, createdAt, ...blogData } = result.toObject()

	const mdxSource = await serialize(content)

	blogData.createdAt = createdAt.toDateString()

	return {
		props: {
			mdxSource,
			blogData,
		},
	}
}

export const getStaticPaths = async () => {
	await connectDB()

	const slugs = await Blog.find({}, 'slug')

	const paths = slugs.map((item) => ({
		params: { slug: item.slug },
	}))

	return {
		paths,
		fallback: false,
	}
}

export default BlogPage
