export const getImages = (state, params) =>
  state.images.images.filter(img => img.creator === params.match.params.id);
