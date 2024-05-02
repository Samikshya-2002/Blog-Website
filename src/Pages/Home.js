import React ,{useEffect} from "react";
import {Link} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import {fetchposts } from '../Redux/slices/Slice';
// import selectallPosts from '../Redux/slices/Slice';
import BlogPost from './BlogPost';

const Home = () => {

    console.log("welcome");
    const dispatch= useDispatch();
    const {posts, isLoading, isError} =useSelector(state => state.posts);
    // const {posts, status, error} =useSelector(selectallPosts);
    
    console.log("state" ,posts)

    useEffect(()=>{
        const fetcheddata = async ()=>{
        if(!posts){
            dispatch(fetchposts());
        }
        console.log("posts", posts);
    };

    fetcheddata();
    // console.log("data fetched", fetchposts);

    },[dispatch,posts]);

    useEffect (()=>{
        console.log("postsnew", posts);
    },[posts]);

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error fetching </div>;
      }


return(
    <>
    <div className="bg-slate-800 h-24 ">
        <p className="text-white text-center text-6xl py-2 transition-all duration-500 hover:translate-x-4 ">Blogs</p>
        <Link to="/posts">
        <p className="text-white text-right  text px-40  pb-80 ">Home</p>
        </Link>
        <div className="bg-slate-600">
        <p> Hii
            {posts && posts.map(post =>(
                <BlogPost key={post.id} post={post} />
            ))}
        </p>    

        </div>
    </div>
    </>
)
};

export default Home;
