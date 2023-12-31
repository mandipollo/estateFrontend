import { Autocomplete } from "@mui/material";
import styled from "@emotion/styled";

const StyledAutocomplete = styled(Autocomplete)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	"& .MuiAutocomplete-input": {
		styles: {
			paddingBottom: 26,
		},
	},
});

export default StyledAutocomplete;
