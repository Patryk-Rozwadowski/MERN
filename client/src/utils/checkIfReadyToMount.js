export const checkIsLoadedIsFetched = (isComponentMounted, isDataFetched) =>
  !!(isComponentMounted && isDataFetched);

export const checkIfEmptyIsMounted = (data, isComponentMounted) =>
  !data.length && isComponentMounted;
