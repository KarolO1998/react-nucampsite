import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured);
};

export const selectCommentsByCampsiteId = (campsiteId) => {
  return COMMENTS.filter(
    (comment) => comment.campsiteId === parseInt(campsiteId)
  );
};