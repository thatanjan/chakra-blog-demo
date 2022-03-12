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
	Heading,
} from '@chakra-ui/react'

import ChakraLink from '@/components/Links/ChakraLink'

const DrawerList = ({ onClose }) => {
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
		<List>
			{listItems.map((item) => (
				<ChakraLink
					ChakraComponent={ListItem}
					href={item.link}
					key={nanoid()}
					sx={{
						display: 'block',
						mt: 5,
						fontSize: 'lg',
					}}
					chakraLinkProps={{
						_focus: {
							outline: 0,
						},
					}}
					fontSize={['md', 'lg', 'xl']}
					onClick={onClose}
				>
					{item.name}
				</ChakraLink>
			))}
		</List>
	)
}

const AppDrawer = ({ isOpen, onClose }) => {
	return (
		<Drawer size='md' isOpen={isOpen} placement='left' onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader py={8}>
					<Heading>Cules Blog</Heading>
				</DrawerHeader>

				<DrawerBody>
					<DrawerList onClose={onClose} />
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	)
}

export default AppDrawer
