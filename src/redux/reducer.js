const initialState = {
    news: []
  };
  
  
  const ADD_NEWS = "ADD_NEWS";
  
  function addNews(isAddNews) {
    return {
      type: ADD_NEWS,
      isAddNews,
    };
  }

  export function addNewNews(news) {
    return (dispatch) => {
      dispatch(addNews(news));
    };
  }
  const counterReducer = (
    state = {
      ...initialState,
    },
    action
  ) => {
    switch (action.type) {
      case "ADD_NEWS":
        state.news.push(action.payload.news)
        return {
          ...state
        };
      default:
        return {
          ...state,
        };
    }
  };
  export default counterReducer;
  