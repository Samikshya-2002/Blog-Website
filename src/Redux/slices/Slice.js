import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//fetchpost is an action              slicename/actionname-'posts/fetchposts'
export const fetchposts= createAsyncThunk('fetchposts' , async () =>{
    console.log("fetching posts");
    
    try{
    const response= await axios.get("https://jsonplaceholder.typicode.com/posts");
    const responses= response.data;
    console.log("response", responses);
    return responses;
    }
    catch(error){
        console.log("error", error);
        throw error;
    }
})

const Slice= createSlice({
    name: 'posts',
    initialState: {
        // value:[] //empty array
        isLoading: false,
        // status:'idle',
        data:[ ],
        isError: false,
    },
    
    // extraReducers:(builder)=>{
    //     builder.addCase(fetchposts.pending ,(state , _action)=>{
    //         state.isLoading = true;
    //     })
    //     .addCase(fetchposts.fulfilled ,(state , action)=>{
    //         state.isLoading = false;
    //         state.data= action.payload;
    //     })
    //     .addCase(fetchposts.rejected ,(state , action)=>{
    //         console.log("Error: " , action.payload);
    //         state.isError= true;
    //     });

    // }

    reducers:{
        setPostsLoading: (state)=>{
            state.isLoading = true;
            state.isError= false;
        },

        setPostSuccess: (state ,action)=>{
            state.isLoading= false;
            state.data= action.payload;
        },

        setPostsError: (state) => {
            state.isLoading = false;
            state.isError = true;
        },

        
    }
});

// export default Slice.reducer;
// export const slectallPosts= state=> state.posts.data

export const { setPostsLoading,setPostSuccess,setPostsError}= Slice.actions;

export default Slice.reducer;