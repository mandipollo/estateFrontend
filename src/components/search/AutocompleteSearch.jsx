import { Autocomplete, Stack } from "@mui/material";
import React from "react";
import StyledTextfield from "../styledComponents/StyledTextfield";
// dummy data
const top100Films = [
	{ label: "The Shawshank Redemption", year: 1994 },
	{ label: "The Godfather", year: 1972 },
	{ label: "The Godfather: Part II", year: 1974 },
	{ label: "The Dark Knight", year: 2008 },
	{ label: "12 Angry Men", year: 1957 },
	{ label: "Schindler's List", year: 1993 },
	{ label: "Pulp Fiction", year: 1994 },
];
const AutocompleteSearch = ({ searchInput, searchInputHandler }) => {
	return (
		<Autocomplete
			disablePortal
			options={top100Films}
			renderInput={params => (
				<StyledTextfield
					{...params}
					onChange={searchInputHandler}
					value={searchInput}
					size="small"
					placeholder="e.g.'Waterloo','NW15', 'GU14 8TJ' or 'Farnborough' "
					variant="filled"
					InputProps={{
						disableUnderline: true,
						style: {
							textAlign: "center",
							paddingBottom: 10,
						},
					}}
				/>
			)}
		></Autocomplete>
	);
};

export default AutocompleteSearch;
