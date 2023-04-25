export type continentType = {
	id: number;
	name: string;
	image: string;
	curiosity: string;
	data: {
		countries: number;
		languages: number;
	};
	popularCities: [
		{
			name: string;
			country: string;
			icon: string;
		}
	];
	description: string;
};

export type navigationType = {
	name: string;
	icon: string;
};
