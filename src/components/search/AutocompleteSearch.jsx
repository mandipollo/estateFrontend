import React from "react";
import StyledTextfield from "../styledComponents/StyledTextfield";
import StyledAutocomplete from "../styledComponents/StyledAutocomplete";

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
