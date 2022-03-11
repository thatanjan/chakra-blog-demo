import Link from 'next/link'
import {
	Link as ChakraLink,
	Text,
	Button,
	Box,
	LinkOverlay,
	Heading,
} from '@chakra-ui/react'

const ChakraNextLink = ({
	ChakraComponent,
	href,
	children,
	chakraLinkProps,
	overlay = false,
	...props
}) => {
	const LinkComponent = overlay ? LinkOverlay : ChakraLink

	return (
		<Link href={href} passHref>
			<LinkComponent {...chakraLinkProps}>
				<ChakraComponent {...props}>{children}</ChakraComponent>
			</LinkComponent>
		</Link>
	)
}

const ChakraTextLink = (props) => (
	<ChakraNextLink ChakraComponent={Text} {...props} />
)

const ChakraButtonLink = (props) => (
	<ChakraNextLink ChakraComponent={Button} {...props} />
)

const ChakraImageLink = (props) => (
	<ChakraNextLink ChakraComponent={Box} {...props} />
)

const ChakraHeadingLink = (props) => (
	<ChakraNextLink ChakraComponent={Heading} {...props} />
)

export { ChakraTextLink, ChakraButtonLink, ChakraImageLink }

export default ChakraNextLink
