import dynamic from 'next/dynamic'
import { Flex, Spacer, Box, IconButton, useDisclosure } from '@chakra-ui/react'

import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'

import Logo from '@/components/Logos/Logo'
import ChakraLink from 'components/Links/ChakraLink'

const CustomIconButton = ({ Icon, ...props }) => {
	return <IconButton size='lg' icon={<Icon />} ml='1rem' {...props} />
}

const AppDrawer = dynamic(() => import('@/components/Drawers/AppDrawer'))
const Search = dynamic(() => import('@/components/Inputs/Search'))

const HamburgerNav = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<>
			<CustomIconButton Icon={HamburgerIcon} onClick={onOpen} />

			{isOpen && <AppDrawer isOpen={isOpen} onClose={onClose} />}
		</>
	)
}

const SearchButton = () => {
	const { onOpen, ...others } = useDisclosure()

	return (
		<>
			<IconButton size='lg' icon={<SearchIcon />} ml='1rem' onClick={onOpen} />
			<Search {...others} />
		</>
	)
}

const AppHeader = () => {
	return (
		<>
			<Box
				pt={{
					base: '5rem',
				}}
				px='2rem'
			>
				<Flex alignItems='center'>
					<ChakraLink href='/' noOutline>
						<Logo />
					</ChakraLink>
					<Spacer />
					<SearchButton />
					<HamburgerNav />
				</Flex>
			</Box>
		</>
	)
}

export default AppHeader
