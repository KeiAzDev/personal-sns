import React, { useContext, useEffect, useState } from 'react'
import "./TimeLine.css";
import Share from '../share/Share';
import Post from '../post/Post';
// import { Posts } from '../../../dummyData';
import axios from "axios";
import { AuthContext } from '../../../state/AuthContext';

export default function TimeLine({username}) {
  const [posts, setPosts] = useState([]);

  const {user} = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username ? await axios.get(`/api/posts/profile/${username}`) : await axios.get(`/api/posts/timeline/${user._id}`);
      // console.log(response.data);
      setPosts(response.data);
    };
    fetchPosts();
  }, [username, user._id]);
  
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
