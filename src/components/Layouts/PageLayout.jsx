import React from 'react'

import { Flex, Spacer, Box } from '@chakra-ui/react'

import AppHeader from '@/components/Headers/AppHeader'

const PageLayout = ({ children }) => {
	return (
		<>
			<AppHeader />

			{children}
		</>
	)
}

export default PageLayout
