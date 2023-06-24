import React, { createContext, useContext } from "react";

const FilterContext = createContext(null);

const FilterContextProvider = ({ children, values }) => {
  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};

export function useFilterContext() {
  return useContext(FilterContext);
}

export default FilterContextProvider;
