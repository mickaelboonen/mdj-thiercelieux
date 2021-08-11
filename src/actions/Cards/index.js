export const FILTER_BY = 'FILTER_BY';
export const filterBy = (value, filter) => ({
  type: FILTER_BY,
  value,
  filter,
});
