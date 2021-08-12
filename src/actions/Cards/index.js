export const FILTER_BY = 'FILTER_BY';
export const filterBy = (value, filter) => ({
  type: FILTER_BY,
  value,
  filter,
});

export const FILL_REDUCER = 'FILL_REDUCER';
export const fillReducer = (currentPage) => ({
  type: FILL_REDUCER,
  currentPage,
});
