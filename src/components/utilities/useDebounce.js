import { useState, useEffect } from "react";

const useDebounce = (value, delay = 100) => {
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(() => {
		const id = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => {
			clearTimeout(id);
		};
	}, [value, delay]);

	return debounceValue;
};

export default useDebounce;
