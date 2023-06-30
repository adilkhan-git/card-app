export const fetchCards = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://api.unsplash.com/photos/random?client_id=QDKuWtL_lkMkqfGjDc_yi2cu1W0ohfOUgDTkDobN9mw&count=10"
      );
      const data = await response.json();
      const cards = data.map((card) => ({
        id: card.id,
        title: card.alt_description || "No Title",
        image: card.urls.small,
        liked: false,
      }));
      dispatch(fetchCardsSuccess(cards));
    } catch (error) {
      dispatch(fetchCardsFailure(error.message));
    }
  };
};

export const fetchCardsSuccess = (cards) => {
  return {
    type: "FETCH_CARDS_SUCCESS",
    payload: cards,
  };
};

export const fetchCardsFailure = (error) => {
  return {
    type: "FETCH_CARDS_FAILURE",
    payload: error,
  };
};

export const likeCard = (id) => {
  return {
    type: "LIKE_CARD",
    payload: id,
  };
};

export const deleteCard = (id) => {
  return {
    type: "DELETE_CARD",
    payload: id,
  };
};

export const toggleLikedOnly = () => {
  return {
    type: "TOGGLE_LIKED_ONLY",
  };
};
