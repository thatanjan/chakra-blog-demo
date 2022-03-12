import React from 'react'

import { Container } from '@chakra-ui/react'

import AppHeader from '@/components/Headers/AppHeader'
import ToggleColorModeButton from '@/components/Buttons/ToggleColorModeButton'
import Footer from '@/components/Footers/Footer'

const PageLayout = ({ children }) => {
	return (
		<>
			<AppHeader />

			<Container px={4} maxW='5xl'>
				{children}
			</Container>

			<Footer />

			<ToggleColorModeButton />
		</>
	)
}

export default PageLayout
