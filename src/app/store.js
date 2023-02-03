import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../Feature/slice";


export default configureStore({
    reducer:{
        dataKey :dataReducer
    }

})

// export default store;