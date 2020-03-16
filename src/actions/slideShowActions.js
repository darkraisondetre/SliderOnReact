import * as types from './slideShowActionTypes'

export const nextImage = currentImageId => {
  return ({
    type: types.NEXT_IMAGE_CLICKED,
    payload: {
      currentImageId: currentImageId
    }
  });
};

export const prevImage = currentImageId => {
  return ({
    type: types.PREV_IMAGE_CLICKED,
    payload: {
      currentImageId: currentImageId
    }
  });
};
