export const checkIsLoadedIsFetched = (isComponentMounted, isDataFetched, data) =>
  !!(isComponentMounted && isDataFetched && data);

export const checkIfEmptyIsMounted = (data, isComponentMounted) =>
  !data.length && isComponentMounted;
