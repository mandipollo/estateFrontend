import { Autocomplete } from "@mui/material";
import styled from "@emotion/styled";

const StyledAutocomplete = styled(Autocomplete)({
	"& .MuiAutocomplete-input": {
		styles: {
			paddingBottom: 26,
		},
	},
});

export default StyledAutocomplete;
