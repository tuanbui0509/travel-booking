import { createSelector } from "@reduxjs/toolkit";

//export những giá trị trong redux mà chúng ta muốn lấy ra, khi muốn lấy ra chúng ta gọi đến lớp này

export const toursSelector = (state) => state.tours.tours
export const statusToursSelector = (state) => state.tours.status
export const errorToursSelector = (state) => state.tours.error

export const filtersSelector = (state) => state.filters
export const arrangementSelector = (state) => state.arrangement.arrangement


export const toursRemainingSelector = createSelector(
    toursSelector,
    filtersSelector,
    arrangementSelector,
    (tours, filters, arrangement) => {
        const { key, starting, destination, date } = filters;

        // Kiểm tra nếu các giá trị filters đều rỗng
        if (!key && !starting && !destination && !date) {
            return tours;
        }

        // Áp dụng các bộ lọc nếu các giá trị filters không rỗng
        let filteredTours = tours;
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
        console.log(arrangement);
        // Áp dụng sắp xếp theo arrangement
        if (arrangement === 'duration') {
            filteredTours.sort((a, b) => a.quantity_date.localeCompare(b.quantity_date));
        } else if (arrangement === 'departure') {
            filteredTours.sort((a, b) => a.start_date.localeCompare(b.start_date));
        } else if (arrangement === 'price') {
            filteredTours.sort((a, b) => Number(a.price_adult) - Number(b.price_adult));
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