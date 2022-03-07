import BlogModel from '@/mongoose/Models/Blog'

import connectDB from '@/mongoose/connectDB'

const handler = async ({ method, query: { customID } }, res) => {
	const errorMeassage = 'Error has occured'

	try {
		await connectDB()

		if (method === 'GET') {
			const { totalViews } = await BlogModel.findOne({ customID }, 'totalViews')

			return res.status(200).json({ totalViews })
		}

		if (method === 'POST') {
			const update = await BlogModel.updateOne(
				{ customID },
				{
					$inc: {
						totalViews: 1,
					},
				}
			)

			console.log(update)

			if (update.modifiedCount) {
				return res.status(200).json({ success: true })
			}

			return res.status(400).json({ errorMeassage })
		}
	} catch (_) {
		res.end({ errorMeassage })
	}
}

export default handler
