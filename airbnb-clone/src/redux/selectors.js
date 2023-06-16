import { createSelector } from "@reduxjs/toolkit";

//export những giá trị trong redux mà chúng ta muốn lấy ra, khi muốn lấy ra chúng ta gọi đến lớp này

export const toursSelector = (state) => state.tours.tours
export const statusToursSelector = (state) => state.tours.status
export const errorToursSelector = (state) => state.tours.error

export const filtersSelector = (state) => state.filters


export const toursRemainingSelector = createSelector(
    toursSelector,
    filtersSelector,
    (tours, filters) => {
        const { key, starting, destination, date } = filters;

        // Kiểm tra nếu các giá trị filters đều rỗng
        if (!key && !starting && !destination && !date) {
            return tours;
        }

        // Áp dụng các bộ lọc nếu các giá trị filters không rỗng
        let filteredTours = tours;
        console.log("tour: "+filteredTours)
        if (key) {
            filteredTours = filteredTours.filter((tour) => tour.catagoryId == key);
        }
        if (starting) {
            filteredTours = filteredTours.filter((tour) => tour.start_location === starting);
        }
        // if (destination) {
        //     filteredTours = filteredTours.filter((tour) => tour.destination == destination);
        // }

        if (date) {
            filteredTours = filteredTours.filter((tour) => tour.start_date === date);
        }

        return filteredTours;
    }
);

export const cartsSelector = (state) => state.carts

export const startlocationsSelector = createSelector(
     toursSelector,
     (tours) => {
        const startLocations = tours.map((item) => item.start_location);
        return startLocations.filter((value, index, self) => self.indexOf(value) === index);
     }
)

export const startDatesSelector = createSelector(
     toursSelector,
     (tours) => {
        const startLocations = tours.map((item) => item.start_date);
        return startLocations.filter((value, index, self) => self.indexOf(value) === index);
     }
)