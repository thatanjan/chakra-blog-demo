import React, { useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'

import { Box, HStack, VStack, Text, Heading, LinkBox } from '@chakra-ui/react'

import useGetViews from 'hooks/useGetViews'

const BlogHead = ({
	banner,
	title,
	description,
	altText,
	createdAt,
	readingTime,
	totalViews,
	customID,
}) => {
	const { data: views, mutate } = useGetViews(customID, totalViews)

	useEffect(() => {
		const cancelTokenSource = axios.CancelToken.source()

		;(async () => {
			try {
				await axios.post(`/api/views/${customID}`, {
					cancelToken: cancelTokenSource.token,
				})

				mutate()
			} catch (_) {}
		})()
		return () => {
			cancelTokenSource.cancel()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<VStack as={LinkBox} spacing='1rem' align='center' m='2rem 0'>
				<Box w='100%'>
					<Image
						src={banner}
						width={16}
						height={9}
						layout='responsive'
						alt={altText}
						objectFit='cover'
					/>
				</Box>

				<Heading align='center'>{title}</Heading>

				<HStack spacing='1rem' wrap='wrap' textTransform='uppercase'>
					<Text>{createdAt}</Text>
					<Text>{views} views</Text>
					<Text>{readingTime}</Text>
				</HStack>
			</VStack>
		</>
	)
}

export default BlogHead
