import React from 'react';
import "../styles/blog.css";

const Blog = () => {
  return (
    <div id="blog" className="blog">
        <div className="blogContent">
            <h1 className="heading blogTitle">OUR ACTIVITIES</h1>
            <div className="blogPosts">
                <div className="blogPost">
                    <img src="https://media.licdn.com/dms/image/D5622AQEb09bdierPGw/feedshare-shrink_2048_1536/0/1718841935293?e=1722470400&v=beta&t=Qwtjri8iXTl_eYNdkQbT9sxTBkcge_Il24Dq_NRgkzA" alt="Blog Post 1" className="postImage"/>
                    <h2 className="postTitle">Today Sunsab was honoured to have Theo Nolasco to come speak with the team!</h2>
                    <p className="postDate">June 19, 2024</p>
                    <p className="postInfo">Theo Nolasco to come speak with the team about his career journey in technology, as well as his thoughts on the challenges and opportunities facing software development professionals in the current market.</p>
                    <a href="https://www.linkedin.com/posts/sunsab_yyctech-cloud-sunsab-activity-7209345613803524096-t-5W?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer" className="readMore">Read More..</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;
