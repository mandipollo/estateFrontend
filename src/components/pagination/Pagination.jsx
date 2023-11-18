import React from "react";

import { Stack, Pagination, Button } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

// redux
import { useSelector } from "react-redux/es/hooks/useSelector";

const PaginationMui = ({
	handlePageChange,
	page,
	prevPageHandler,
	nextPageHandler,
}) => {
	const results = useSelector(state => state.forSale);
	console.log(results);
	const numberOfPages = Math.ceil(
		results.data.totalResultCount / results.data.resultsPerPage
	);

	return (
		<Stack direction="row" spacing={2}>
			<Button
				disabled={page === 1}
				size="medium"
				startIcon={<ArrowBackIosNewOutlinedIcon />}
				variant="text"
				onClick={prevPageHandler}
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
				disabled={numberOfPages === page}
				onClick={nextPageHandler}
			>
				Next
			</Button>
		</Stack>
	);
};

export default PaginationMui;
