/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Embeds from './Embeds'
import Images from './Images'
import Texts from './Texts'
import Codes from './Codes'

const components = {
	// custom
	...Texts,
	...Images,
	...Codes,

	// embed components
	...Embeds,
}

export default components
