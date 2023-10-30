const initialState = {
  warehouselist: [],
};

const warehouseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETHOUSES":
      return {
        ...state,
        warehouselist: action.payload,
      };

    // case "UPDATE_WAREHOUSES":
    //   return {
    //     ...state,
    //     warehouselist: action.payload,
    //   } 
      

      

    default:
      return state;
  }
};

export default warehouseReducer;
