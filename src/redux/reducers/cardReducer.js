const initialState = {
  cards: [],
  likedOnly: false,
  error: null,
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARDS_SUCCESS":
      return {
        ...state,
        cards: action.payload,
        error: null,
      };
    case "FETCH_CARDS_FAILURE":
      return {
        ...state,
        cards: [],
        error: action.payload,
      };
    case "LIKE_CARD":
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload ? { ...card, liked: !card.liked } : card
        ),
      };
    case "DELETE_CARD":
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };
    case "TOGGLE_LIKED_ONLY":
      return {
        ...state,
        likedOnly: !state.likedOnly,
      };
    default:
      return state;
  }
};

export default cardReducer;
