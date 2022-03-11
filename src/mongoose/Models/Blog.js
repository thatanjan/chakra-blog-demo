import mongoose, { Schema, model } from 'mongoose'

const stringRequired = {
	type: String,
	required: true,
}

const schema = new Schema({
	title: stringRequired,
	description: stringRequired,
	slug: stringRequired,
	createdAt: {
		type: Date,
		default: Date.now,
	},
	content: stringRequired,
	totalViews: { type: Number, default: 0 },
	banner: stringRequired,
	altText: stringRequired,
	readingTime: stringRequired,
	customID: stringRequired,
})

export default mongoose.models.blog || model('blog', schema)
