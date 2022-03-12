import React from 'react'

import { IconButton, useColorMode } from '@chakra-ui/react'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ToggleColorModeButton = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<>
			<IconButton
				icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
				size='lg'
				onClick={toggleColorMode}
				colorScheme='teal'
				sx={{
					position: 'fixed',
					bottom: '3rem',
					right: '2rem',
					zIndex: '1',
				}}
			/>
		</>
	)
}

export default ToggleColorModeButton
