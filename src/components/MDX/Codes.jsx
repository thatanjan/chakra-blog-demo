import { Code } from '@chakra-ui/react'

import CodeBlock from './CodeBlock'
import Wrapper from './Wrapper'

const components = {
	pre: CodeBlock,
}

components.code = (props) => (
	<Code fontSize={['md', 'lg', 'xl']} {...props} m='0 .5rem' />
)

components.pre = (props) => (
	<Wrapper>
		<CodeBlock {...props} />
	</Wrapper>
)

export default components
