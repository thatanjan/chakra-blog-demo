import React from 'react'

import { Flex, Spacer, Box, Container, useTheme } from '@chakra-ui/react'

import AppHeader from '@/components/Headers/AppHeader'
import ToggleColorModeButton from '@/components/Buttons/ToggleColorModeButton'
import Footer from '@/components/Footers/Footer'

const PageLayout = ({ children }) => {
	return (
		<>
			<AppHeader />

			<Container maxW='5xl'>{children}</Container>

			<Footer />

			<ToggleColorModeButton />
		</>
	)
}

export default PageLayout
