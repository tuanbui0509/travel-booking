// 1. Tạo context mới
import React, { createContext, useContext, useState } from "react";

const SelectedTourContext = createContext();

// 2. Tạo provider cho context và cung cấp giá trị cho context
export const SelectedTourProvider = ({ children }) => {
    const [selectedTour, setSelectedTour] = useState(null);

    return (
        <SelectedTourContext.Provider value={{ selectedTour, setSelectedTour }}>
            {children}
        </SelectedTourContext.Provider>
    );
};

// 3. Truy cập thông tin của tour được chọn từ context
export const useSelectedTour = () => useContext(SelectedTourContext);
