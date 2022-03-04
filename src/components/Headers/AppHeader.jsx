import dynamic from 'next/dynamic'
import { Flex, Spacer, Box, IconButton, useDisclosure } from '@chakra-ui/react'

import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'

import Logo from '@/components/Logos/Logo'

const CustomIconButton = ({ Icon, ...props }) => {
	return <IconButton size='lg' icon={<Icon />} ml='1rem' {...props} />
}

const AppDrawer = dynamic(() => import('@/components/Drawers/AppDrawer'))

const HamburgerNav = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<>
			<CustomIconButton Icon={HamburgerIcon} onClick={onOpen} />

			{isOpen && <AppDrawer isOpen={isOpen} onClose={onClose} />}
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
					<Logo />
					<Spacer />
					<CustomIconButton Icon={SearchIcon} />
					<HamburgerNav />
				</Flex>
			</Box>
		</>
	)
}

export default AppHeader
