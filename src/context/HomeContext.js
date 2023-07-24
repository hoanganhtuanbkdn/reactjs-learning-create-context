import React, { useContext, useState } from 'react';
const HomeContext = React.createContext([]);

const HomeProvider = ({ children }) => {
	const [list, setList] = useState([]);
	return (
		<HomeContext.Provider value={{ list, setList }}>
			{children}
		</HomeContext.Provider>
	);
};

const useHomeContext = () => {
	const homeContext = useContext(HomeContext);

	return homeContext;
};
export { HomeProvider, useHomeContext };
