import mongoose, { Schema, model } from 'mongoose'

const stringRequired = {
	type: String,
	required: true,
}

const stringRequiredIndexed = { ...stringRequired, text: true }

const schema = new Schema({
	title: stringRequiredIndexed,
	description: stringRequiredIndexed,
	slug: stringRequired,
	createdAt: {
		type: Date,
		default: Date.now,
	},
	content: stringRequiredIndexed,
	totalViews: { type: Number, default: 0 },
	category: stringRequiredIndexed,
	banner: stringRequired,
	altText: stringRequired,
	readingTime: stringRequired,
	customID: stringRequired,
})

export default mongoose.models.blog || model('blog', schema)
