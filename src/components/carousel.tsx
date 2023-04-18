import { useEffect, useState } from 'react';

import { Flex, Image, Text } from '@chakra-ui/react';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRouter } from 'next/router';

type Continent = {
	id: number;
	name: string;
	image: string;
	curiosity: string;
};

export const Carousel = () => {
	const [continent, setContinent] = useState<Continent[] | []>([]);

	const router = useRouter();

	useEffect(() => {
		axios
			.get('http://localhost:3001/continents')
			.then((resp) => setContinent(resp.data))
			.catch((e) => setContinent(e));
	}, []);

	const choiceOfContinent = (resp: number) => {
		router.push(`/continent/?id=${resp}`);
	};

	return (
		//ARRUMAR CORES DAS SETAS DO CAROUSEL
		<Flex margin="0 auto" maxW={['100%', 1200]} maxH={[250, 450]} mb="10" justifyContent="center">
			<Swiper
				autoplay={true}
				loop={true}
				navigation={true}
				pagination={true}
				keyboard={true}
				modules={[Navigation, Pagination, Keyboard, Autoplay]}
			>
				{continent.length > 0 ? (
					continent.map((info) => (
						<SwiperSlide key={info.id}>
							<Flex
								justifyContent="center"
								alignItems="center"
								cursor="pointer"
								onClick={() => choiceOfContinent(info.id)}
							>
								<Image
									src={info.image}
									alt={info.name}
									width={['100%', 1240]}
									height={[250, 450]}
								/>
								<Flex color="white-100" direction="column" position="absolute" alignItems="center">
									<Text fontWeight={700} fontSize={[24, 48]}>
										{info.name}
									</Text>
									<Text as="span" fontWeight={700} fontSize={[14, 24]}>
										{info.curiosity}
									</Text>
								</Flex>
							</Flex>
						</SwiperSlide>
					))
				) : (
					<h1>Sem resultado</h1>
				)}
			</Swiper>
		</Flex>
	);
};
