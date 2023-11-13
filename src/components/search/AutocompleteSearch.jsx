import React from "react";
// components
import StyledTextfield from "../styledComponents/StyledTextfield";
import StyledAutocomplete from "../styledComponents/StyledAutocomplete";

// a autcomplete componenet that sends delayed search input by 100ms and lists suggestions
const AutocompleteSearch = ({
	searchInput,
	searchInputHandler,
	options,
	autoCompleteHandler,
}) => {
	return (
		<StyledAutocomplete
			onChange={autoCompleteHandler}
			options={options}
			getOptionLabel={options => options.displayName}
			renderInput={params => (
				<StyledTextfield
					{...params}
					onChange={searchInputHandler}
					value={searchInput}
					size="small"
					placeholder="Location "
					variant="filled"
				/>
			)}
		></StyledAutocomplete>
	);
};

export default AutocompleteSearch;
