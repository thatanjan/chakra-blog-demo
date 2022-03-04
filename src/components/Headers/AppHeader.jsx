import { Flex, Spacer, Box, IconButton } from '@chakra-ui/react'

import Logo from '@/components/Logos/Logo'

import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'

const CustomIconButton = ({ Icon }) => {
	return <IconButton size='lg' icon={<Icon />} ml='1rem' />
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
					<CustomIconButton Icon={HamburgerIcon} />
				</Flex>
			</Box>
		</>
	)
}

export default AppHeader
