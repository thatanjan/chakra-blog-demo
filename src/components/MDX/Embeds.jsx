import React from 'react'

import { YouTube, Gist, CodePen, CodeSandbox } from 'mdx-embed'
import Tweet from './Tweet'
import Wrapper from './Wrapper'

const CustomTweet = (props) => <Tweet {...props} theme='dark' align='center' />

const components = {}

const embedComponents = {
	YouTube,
	Gist,
	CodePen,
	CodeSandbox,
	Tweet: CustomTweet,
}

Object.keys(embedComponents).forEach(
	(key) =>
		(components[key] = (props) => {
			const Component = embedComponents[key]
			return (
				<Wrapper>
					<Component {...props} />
				</Wrapper>
			)
		})
)

export default components
