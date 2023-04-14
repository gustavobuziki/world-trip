import { useEffect, useState } from 'react';

import { Flex, Image, Text } from '@chakra-ui/react';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Continent = {
	id: number;
	name: string;
	image: string;
	curiosity: string;
};

export const Carousel = () => {
	const [continent, setContinent] = useState<Continent[] | []>([]);

	useEffect(() => {
		axios
			.get('http://localhost:3001/continents')
			.then((resp) => setContinent(resp.data))
			.catch((e) => setContinent(e));
	}, []);

	return (
		<Flex margin="0 auto" maxW={1200} maxH={450} mb="10" justifyContent="center">
			<Swiper
				autoplay={true}
				loop={true}
				navigation={true}
				pagination={true}
				keyboard={true}
				modules={[Navigation, Pagination, Keyboard, Autoplay]}
			>
				{continent.map((info) => (
					<SwiperSlide key={info.id}>
						<Flex justifyContent="center" alignItems="center">
							<Image src={info.image} alt={info.name} width={1240} height={450} />
							<Flex color="white-100" direction="column" position="absolute" alignItems="center">
								<Text fontWeight={700} fontSize={48}>
									{info.name}
								</Text>
								<Text as="span" fontWeight={700} fontSize={24}>
									{info.curiosity}
								</Text>
							</Flex>
						</Flex>
					</SwiperSlide>
				))}
			</Swiper>
		</Flex>
	);
};
