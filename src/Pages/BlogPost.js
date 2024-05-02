import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost =({post})=>{

    // console.log(post.title);

    return(
        <div className="bg-blue-950">
            {/* <h2>{post.title}</h2>
            <p>{post.body}</p> */}

        <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600">{post.body} hello</p>
            <div className="text-right mt-2">
                {/* <a href={`/posts/${post.id}`} className="text-blue-500">Read more</a> */}

                {/* <a href="https://jsonplaceholder.typicode.com/posts" target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more</a> */}

                <Link to={`/posts/${post.id}`} className="text-blue-500">Read more</Link>

            </div>
        </div>
    );

};

export default BlogPost;