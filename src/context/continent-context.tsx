import {
	ReactNode,
	createContext,
	useState,
	useEffect,
	useContext,
	Dispatch,
	SetStateAction,
} from 'react';

import { continentType } from '~/type/continente-type';
import { useRouter } from 'next/router';

interface ContinentContextProps {
	children: ReactNode;
}

type ContinentContextType = {
	continents: continentType[];
	choiceOfContinent: (name: string) => void;
	chosenContinent: continentType | null;
	setContinents: Dispatch<SetStateAction<continentType[] | []>>;
};

const ContinentContext = createContext({} as ContinentContextType);

export const ContinentContextProvider = ({ children }: ContinentContextProps) => {
	const [continents, setContinents] = useState<continentType[] | []>([]);
	const [chosenContinent, setChosenContinent] = useState<continentType | null>(null);
	const routes = useRouter();

	useEffect(() => {
		if (chosenContinent === null) {
			const getStorage = sessionStorage.getItem('continent');

			if (getStorage) setChosenContinent(JSON.parse(getStorage));
		}
	}, []);

	const choiceOfContinent = (name: string) => {
		const fetchInArray = continents.find((continent) => continent.name === name);

		if (fetchInArray) {
			setChosenContinent(fetchInArray);
			routes.push('/continent');

			sessionStorage.setItem('continent', JSON.stringify(fetchInArray));
		}
	};

	return (
		<ContinentContext.Provider
			value={{ continents, choiceOfContinent, chosenContinent, setContinents }}
		>
			{children}
		</ContinentContext.Provider>
	);
};

export const useContinentContext = () => useContext(ContinentContext);
