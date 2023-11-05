import React, { useState } from "react";
import { Stack, Pagination, Button } from "@mui/material";

import { useSelector } from "react-redux/es/hooks/useSelector";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
const PaginationMui = () => {
	const results = useSelector(state => state.forSale.totalResultCount);
	const numberOfPages = Math.ceil(results / 25);
	const [page, setPage] = useState(1);

	const handlePageChange = (event, value) => {
		setPage(value);
	};
	return (
		<Stack direction="row" spacing={2}>
			<Button
				disabled={page === 1}
				size="medium"
				startIcon={<ArrowBackIosNewOutlinedIcon />}
				variant="text"
			>
				Previous
			</Button>
			<Pagination
				count={numberOfPages}
				page={page}
				onChange={handlePageChange}
			/>
			<Button
				size="medium"
				endIcon={<ArrowForwardIosOutlinedIcon />}
				variant="text"
			>
				Next
			</Button>
		</Stack>
	);
};

export default PaginationMui;
