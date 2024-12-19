import React, { useEffect, useState } from 'react'
import "./TimeLine.css";
import Share from '../share/Share';
import Post from '../post/Post';
// import { Posts } from '../../../dummyData';
import axios from "axios";

export default function TimeLine({username}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username ? await axios.get(`/api/posts/profile/${username}`) : await axios.get("/api/posts/timeline/675cb8209fd61067b8010bfa");
      // console.log(response.data);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username]);
  
  return (
    <div className='timeline'>
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id}/>
        ))}
      </div>
    </div>
  )
}
