import { legacy_createStore as createStore } from "redux";

import warehouseReducer from "./reducer";

const warehouseStore = createStore(warehouseReducer)
warehouseStore.subscribe(()=>{
    warehouseStore.getState()
})
export default warehouseStore;