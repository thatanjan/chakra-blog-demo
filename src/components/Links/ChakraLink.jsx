import Link from 'next/link'
import { Link as ChakraLink, Text, Button, Image, Box } from '@chakra-ui/react'

const ChakraNextLink = ({ ChakraComponent, href, children, ...props }) => (
	<Link href={href} passHref>
		<ChakraComponent as={ChakraLink} {...props}>
			{children}
		</ChakraComponent>
	</Link>
)

const ChakraTextLink = (props) => (
	<ChakraNextLink ChakraComponent={Text} {...props} />
)

const ChakraButtonLink = (props) => (
	<ChakraNextLink ChakraComponent={Button} {...props} />
)

const ChakraImageLink = (props) => (
	<ChakraNextLink ChakraComponent={Box} {...props} />
)

export { ChakraTextLink, ChakraButtonLink, ChakraImageLink }

export default ChakraNextLink
