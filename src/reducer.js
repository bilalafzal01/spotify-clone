export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  // * remove after finishing developing
  // token:
  //   "BQBFWvGabbhwWPw-xoQllDk7Y6VIuxPHEOImBdsxMTRhZ5t6ey0rDvEci2M8b2XxgX9Bj_lDYafAjgEIa5ck5T0mXfDP0Xb1t_kC4znaqcHtgjgsGCumnZ3zQ2t6gJveR6dujkztUbcQAVokxl1FRtFq_uU10i1tGIS-lZIlsm82s7c3",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    default:
      return state;
  }
};

export default reducer;
