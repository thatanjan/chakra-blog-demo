import { Flex, Spacer, Box } from '@chakra-ui/react'

import Logo from '@/components/Logos/Logo'

const AppHeader = () => {
	return (
		<>
			<Box
				pt={{
					base: '5rem',
				}}
			>
				<Flex>
					<Logo />
					<Spacer />
				</Flex>
			</Box>
		</>
	)
}

export default AppHeader
