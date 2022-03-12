import Link from 'next/link'
import {
	Link as ChakraLink,
	Text,
	Button,
	Box,
	LinkOverlay,
	Heading,
	useColorMode,
} from '@chakra-ui/react'

const ChakraNextLink = ({
	ChakraComponent = Box,
	href,
	children,
	chakraLinkProps = {},
	overlay = false,
	noOutline,
	noUnderline,
	color,
	...props
}) => {
	const LinkComponent = overlay ? LinkOverlay : ChakraLink

	if (noOutline) {
		chakraLinkProps._focus = chakraLinkProps._focus || {}
		chakraLinkProps._focus.outline = 0
	}

	if (noUnderline) {
		chakraLinkProps._hover = chakraLinkProps._hover || {}
		chakraLinkProps._hover.textDecoration = 'none'
	}

	return (
		<Link href={href} passHref>
			<LinkComponent color={color} {...chakraLinkProps}>
				<ChakraComponent {...props}>{children}</ChakraComponent>
			</LinkComponent>
		</Link>
	)
}

const ChakraTextLink = (props) => {
	const { colorMode } = useColorMode()
	return (
		<ChakraNextLink
			ChakraComponent={Text}
			{...props}
			color={`teal.${colorMode === 'light' ? 500 : 300}`}
		/>
	)
}

const ChakraButtonLink = (props) => (
	<ChakraNextLink ChakraComponent={Button} {...props} noUnderline />
)

const ChakraImageLink = (props) => (
	<ChakraNextLink ChakraComponent={Box} {...props} />
)

const ChakraHeadingLink = (props) => (
	<ChakraNextLink ChakraComponent={Heading} {...props} />
)

export { ChakraTextLink, ChakraButtonLink, ChakraImageLink, ChakraHeadingLink }

export default ChakraNextLink
