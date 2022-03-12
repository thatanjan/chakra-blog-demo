/* eslint react/jsx-key: 0 */

import { useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'

import { Button, Flex } from '@chakra-ui/react'

const CodeBlock = ({ children }) => {
	const [codeCopied, setCodeCopied] = useState(false)

	if (!children) return null

	const {
		props: { className, children: code = '' },
	} = children

	const language = className ? className.replace(/language-/, '') : ''

	const handleCopy = () => {
		navigator.clipboard.writeText(code)
		setCodeCopied(true)

		setTimeout(() => {
			setCodeCopied(false)
		}, 2000)
	}

	return (
		<Highlight
			{...defaultProps}
			theme={vsDark}
			code={code.trim()}
			language={language}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<>
					<pre
						className={className}
						style={{
							...style,
							padding: '30px',
							overflowX: 'auto',
						}}
					>
						<Flex justifyContent='end'>
							<Button textTransform='uppercase' onClick={handleCopy}>
								{codeCopied ? 'Copied' : 'Copy'}
							</Button>
						</Flex>

						{tokens.map((line, i) => (
							<div key={i} {...getLineProps({ line, key: i })}>
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</div>
						))}
					</pre>
				</>
			)}
		</Highlight>
	)
}

export default CodeBlock
