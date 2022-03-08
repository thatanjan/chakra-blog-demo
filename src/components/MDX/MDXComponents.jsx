import { Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

import {
	ChakraTextLink,
	ChakraImageLink,
	Kbd,
} from '@/components/Links/ChakraLink'
import CodeBlock from './CodeBlock'

const components = { Image }

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

;(() => {
	let length = headings.length

	headings.forEach((tag) => {
		const size = `${length}xl`

		components[tag] = (props) => <Heading as={tag} fontSize={size} {...props} />

		length--
	})
})()

components.p = (props) => <Text fontSize={['md', 'lg', 'xl']} {...props} />

components.a = ChakraTextLink

components.code = CodeBlock

// components.code = (props) => <Kbd {...props} />

export default components
