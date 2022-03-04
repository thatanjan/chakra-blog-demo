import React from 'react'
import { nanoid } from 'nanoid'

import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	List,
	ListItem,
} from '@chakra-ui/react'

import { ChakraTextLink } from '@/components/Links/ChakraLink'

const DrawerList = () => {
	const listItems = [
		{
			name: 'Home',
			link: '/',
		},
		{
			name: 'Categories',
			link: '/categories',
		},
		{
			name: 'About',
			link: '/about',
		},
		{
			name: 'Contact',
			link: '/contact',
		},
	]

	return (
		<List spacing={3}>
			{listItems.map((item) => (
				<ChakraTextLink
					ChakraComponent={ListItem}
					href={item.link}
					key={nanoid()}
					sx={{
						display: 'block',
						'&:hover': {
							textDecoration: 'none',
						},
					}}
					fontSize={['md', 'lg', 'xl']}
				>
					{item.name}
				</ChakraTextLink>
			))}
		</List>
	)
}

const AppDrawer = ({ isOpen, onClose }) => {
	return (
		<Drawer isOpen={isOpen} placement='left' onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>Cules Blog</DrawerHeader>

				<DrawerBody>
					<DrawerList />
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	)
}

export default AppDrawer
