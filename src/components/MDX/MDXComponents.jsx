/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Heading, Text, Code, Box } from '@chakra-ui/react'
import Image from 'next/image'
import { YouTube, Gist, CodePen, CodeSandbox } from 'mdx-embed'

import { ChakraTextLink } from '@/components/Links/ChakraLink'
import CodeBlock from './CodeBlock'

import Tweet from './Tweet'

const components = {
	// custom
	Image,
	pre: CodeBlock,
	a: ChakraTextLink,

	// embed components

	// chakra components
	Box,
}

const NeedsWrapping = { YouTube, Gist, CodePen, CodeSandbox, Tweet }

;(() => {
	const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
	let length = headings.length

	headings.forEach((tag) => {
		const size = `${length}xl`

		components[tag] = (props) => (
			<Heading as={tag} fontSize={size} {...props} mt={14} mb={4} />
		)

		length--
	})
})()

components.p = (props) => (
	<Text fontSize={['md', 'lg', 'xl']} {...props} mb={8} />
)

components.code = (props) => (
	<Code fontSize={['md', 'lg', 'xl']} {...props} m='0 .5rem' />
)

const ComponentWrapper = ({ children }) => (
	<Box mt={8} mb={8}>
		{children}
	</Box>
)

const NextImage = ({ alt, ...props }) => (
	<ComponentWrapper>
		<Image {...props} alt={alt} />
	</ComponentWrapper>
)

components.img = (props) => (
	<ComponentWrapper>
		<img {...props} />
	</ComponentWrapper>
)

components.Image = NextImage
;(() => {
	console.log('hello')
})()

// ;(() =>
// 	Object.keys(NeedsWrapping).forEach((key) => {
// 		const Embed = NeedsWrapping[key]
// 		components[key] = (props) => (
// 			<ComponentWrapper>
// 				<Embed {...props} />
// 			</ComponentWrapper>
// 		)
// 	}))()

export default components
