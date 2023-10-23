import { Autocomplete } from "@mui/material";
import React from "react";
import StyledTextfield from "../styledComponents/StyledTextfield";

const AutocompleteSearch = ({ searchInput, searchInputHandler, options }) => {
	console.log(options);
	return (
		<Autocomplete
			options={options}
			getOptionLabel={options => options.displayName}
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
