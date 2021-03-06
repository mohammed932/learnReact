import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE: {
      return {
        ...state,
        places: state.places.concat({
          name: action.placeName,
          image: {
            uri:
              "https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg"
          },
          key: Math.random()
        })
      };
    }
    case DELETE_PLACE: {
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    }
    default:
      return state;
  }
};

export default reducer;
