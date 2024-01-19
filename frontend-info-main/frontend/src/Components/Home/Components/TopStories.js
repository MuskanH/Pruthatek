import React from 'react';
import { Link } from 'react-router-dom';
import './../Styles/TopStories.css'
import TopStoriesData from './../../../JSON/topstories.json'

function TopStories(props) {
    return (
        <div>
            <p className="top-title">TOP STORIES</p>
            <div className="top-stories">
                {
                    TopStoriesData.map((blog, index) => {
                        if (index % 3 === 0) {
                            return (
                                <Link to={{
                                    pathname: "/Blog/customized",
                                    state: blog
                                }} key={index}>
                                    <div className="bigger-img-card" key={index} data-aos="fade-up">
                                        <img src={blog.imgPath} alt="cabinet"></img>
                                        <div className="text-content">
                                            <h1>{blog.blogTitle}</h1>
                                            <p className="by-author">{blog.author}</p>
                                        </div>
                                    </div>
                                </Link>)
                        }
                        else {
                            return (
                                <div className="small-img-card" key={index} data-aos="fade-up">
                                    <Link to={{
                                        pathname: `/Blog/${blog.blogTitle}`,
                                        state: blog
                                    }} key={index} className="Link-react">
                                        <img src={blog.imgPath} alt="cabinet" />
                                        <h3 className="sm-img-card-title">{blog.blogTitle}</h3>
                                    </Link>
                                    <p className="by-author">{blog.author}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
            {/* {
                TopStoriesData.map((blog, index) => (
                    <div key={index}>
                        <Link to={{
                            pathname: "/Blog/customized",
                            state: blog
                        }}>
                            <div className="bigger-img-card" key={index}>
                                <img src={blog.imgPath} alt="cabinet"></img>
                                <div className="text-content">
                                    <h1>{blog.blogTitle}</h1>
                                    <p className="by-author">{blog.author}</p>
                                </div>
                            </div>
                        </Link>
                        <div className="small-img-card-container">
                            {
                                blog.nextTwo.map((nextBlog,ind) => (
                                    <div className="small-img-card" key={ind}>
                                        <img src={nextBlog.imgPath} alt="cabinet" />
                                        <h3>{nextBlog.blogTitle}</h3>
                                        <p className="by-author">{nextBlog.author}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            } */}
        </div>
    );
}

export default TopStories;