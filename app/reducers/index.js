import Axios from "axios";

const initialState = {
  allCandies: [],
};

// what are the ways we can update the state?

// action type
const GOT_CANDIES = 'GOT_CANDIES';

// action creator
export const gotCandies = candies => ({type: GOT_CANDIES, candies});
export const gettingCandies = () => async(dispatch) => {
  const {data} = await Axios.get('/api/candies');
  dispatch(gotCandies(data));
}

// case in our reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES:
      return {...state, allCandies: action.candies};
    default:
      return state
  }
}

export default rootReducer
