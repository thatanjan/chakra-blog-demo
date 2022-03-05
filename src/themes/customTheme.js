import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
	sm: '600px',
	md: '960px',
	lg: '1280px',
	xl: '1920px',
})

const styles = {
	global: () => ({
		html: {
			// fontSize: '62.5%',
		},
	}),
}

const config = {
	initialColorMode: 'dark',
}

const theme = extendTheme({ styles, breakpoints, config })

export default theme
