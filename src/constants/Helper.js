import moment from "moment";

// Component for all helper methods 
export const helper = {
	// Tuesday, August 3, 2022 will be the date formate
	dateFormate: (date) => {
		return moment(date).format('dddd, MMMM d, YYYY');
	}
};
