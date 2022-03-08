import { Tweet } from 'mdx-embed'

const EmbededTweet = ({ theme: _, ...props }) => (
	<Tweet {...props} theme='dark' align='center' />
)

export default EmbededTweet
