import { configureStore } from '@reduxjs/toolkit';
// import { useDispatch } from "react-redux";
import postsReducer  from "./slices/Slice.js";



// export default configureStore({
//     reducer:{}
// })



const store = configureStore({
    reducer:{
        posts:postsReducer,
    }
});
export default store;