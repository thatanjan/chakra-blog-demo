import React from 'react'
import Image from 'next/image'

const Logo = () => {
	const dimension = 70
	return (
		<Image
			src='/logo.jpg'
			height={dimension}
			width={dimension}
			alt='Cules Coding'
		/>
	)
}

export default Logo
