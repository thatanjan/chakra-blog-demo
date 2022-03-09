/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Image from 'next/image'

import Wrapper from './Wrapper'

const components = {}

const NextImage = (props) => (
	<Wrapper>
		<Image {...props} />
	</Wrapper>
)

components.img = (props) => (
	<Wrapper>
		<img {...props} />
	</Wrapper>
)

components.Image = NextImage

export default components
