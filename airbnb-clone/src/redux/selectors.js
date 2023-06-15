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
        return  tours.filter(tour => tour.catagoryId == filters.key);
    }
);

export const cartsSelector = (state) => state.carts