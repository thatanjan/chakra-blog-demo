import { Heading, Text, Code } from '@chakra-ui/react'
import Image from 'next/image'
import { YouTube } from 'mdx-embed'

import { ChakraTextLink } from '@/components/Links/ChakraLink'
import CodeBlock from './CodeBlock'

const components = {
	// custom
	Image,
	pre: CodeBlock,
	a: ChakraTextLink,

	// embed components
	YouTube,

	// chakra components
}

;(() => {
	const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
	let length = headings.length

	headings.forEach((tag) => {
		const size = `${length}xl`

		components[tag] = (props) => <Heading as={tag} fontSize={size} {...props} />

		length--
	})
})()

components.p = (props) => <Text fontSize={['md', 'lg', 'xl']} {...props} />

components.code = (props) => <Code fontSize={['md', 'lg', 'xl']} {...props} />

export default components
