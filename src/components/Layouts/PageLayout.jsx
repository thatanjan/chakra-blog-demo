import React from 'react'

import { Flex, Spacer, Box, useTheme } from '@chakra-ui/react'

import AppHeader from '@/components/Headers/AppHeader'
import ToggleColorModeButton from '@/components/Buttons/ToggleColorModeButton'

const PageLayout = ({ children }) => {
	console.log(useTheme())
	return (
		<>
			<AppHeader />

			{children}

			<ToggleColorModeButton />
		</>
	)
}

export default PageLayout
