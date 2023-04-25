import { Flex, Image, Text, CircularProgress } from '@chakra-ui/react';

import { useContinentContext } from '~/context/continent-context';

import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect } from 'react';

export const Carousel = () => {
	const { continents, choiceOfContinent, setContinents } = useContinentContext();

	useEffect(() => {
		axios
			.get('http://localhost:3001/continents')
			.then((resp) => setContinents(resp.data))
			.catch((e) => console.log(e));
	}, []);

	return (
		//ARRUMAR CORES DAS SETAS DO CAROUSEL
		<Flex margin="0 auto" maxW={['100%', 1200]} maxH={[250, 450]} mb="10" justifyContent="center">
			{continents.length > 0 ? (
				<Swiper
					autoplay={true}
					loop={true}
					navigation={true}
					pagination={true}
					keyboard={true}
					modules={[Navigation, Pagination, Keyboard, Autoplay]}
					className="my-carousel"
				>
					{continents.map((continent) => (
						<SwiperSlide key={continent.id}>
							<Flex
								justifyContent="center"
								alignItems="center"
								cursor="pointer"
								onClick={() => choiceOfContinent(continent.name)}
							>
								<Image
									src={continent.image}
									alt={continent.name}
									width={['100%', 1240]}
									height={[250, 450]}
								/>
								<Flex color="white-100" direction="column" position="absolute" alignItems="center">
									<Text fontWeight={700} fontSize={[24, 48]}>
										{continent.name}
									</Text>
									<Text as="span" fontWeight={700} fontSize={[14, 24]}>
										{continent.curiosity}
									</Text>
								</Flex>
							</Flex>
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				<CircularProgress isIndeterminate color="yellow" size={20} />
			)}
		</Flex>
	);
};
