import { ListItem, OrderedList, UnorderedList } from '@chakra-ui/react'

import { BlogText } from './Texts'

const components = {
	ul: UnorderedList,
	ol: OrderedList,
	li: (props) => <BlogText as={ListItem} {...props} />,
}

export default components
