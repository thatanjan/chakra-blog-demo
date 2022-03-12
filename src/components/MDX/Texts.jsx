import { Heading, Text } from '@chakra-ui/react'

import { ChakraTextLink } from 'components/Links/ChakraLink'

const components = {}

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

let length = headings.length

headings.forEach((tag) => {
	const size = `${length}xl`

	components[tag] = (props) => (
		<Heading as={tag} fontSize={size} {...props} mt={12} mb={6} />
	)

	length--
})

components.p = (props) => (
	<Text
		fontSize={['md', 'lg', 'xl']}
		{...props}
		mt={8}
		mb={8}
		lineHeight='taller'
		letterSpacing='wide'
	/>
)

components.a = (props) => <ChakraTextLink {...props} display='inline' />

export default components
