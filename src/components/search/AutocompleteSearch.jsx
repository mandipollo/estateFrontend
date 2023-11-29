import React from "react";
// components
import StyledTextfield from "../styledComponents/StyledTextfield";
import StyledAutocomplete from "../styledComponents/StyledAutocomplete";

//  autcomplete componenet that sends delayed search input by 100ms and lists suggestions
const AutocompleteSearch = ({
	widthvalue,
	searchInput,
	searchInputHandler,
	options,
	autoCompleteHandler,
}) => {
	return (
		<StyledAutocomplete
			fullWidth
			onChange={autoCompleteHandler}
			options={options}
			getOptionLabel={options => options.displayName}
			renderInput={params => (
				<StyledTextfield
					widthvalue={widthvalue}
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
