import Blog from '@/mongoose/Models/Blog'

import connectDB from '@/mongoose/connectDB'

const handler = async ({ method, query: { query } }, res) => {
	const errorMeassage = 'Error has occured'
	try {
		if (method !== 'GET') return res.status(400).json({ errorMeassage })

		await connectDB()

		const searchFields = ['title', 'description']

		const shouldSearch = searchFields.map((field) => ({
			autocomplete: {
				query,
				path: field,
				fuzzy: { maxEdits: 1, prefixLength: 1, maxExpansions: 256 },
			},
		}))

		const agg = [
			{
				$search: {
					compound: {
						should: shouldSearch,
					},
				},
			},
			{
				$project: {
					_id: 0,
					banner: 0,
					content: 0,
					altText: 0,
					customID: 0,
				},
			},
		]

		const blogs = await Blog.aggregate(agg)

		return res.send(blogs)
	} catch (_) {
		console.log(_)
		res.end({ errorMeassage })
	}
}

export default handler
