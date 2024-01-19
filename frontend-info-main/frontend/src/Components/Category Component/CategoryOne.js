import React from 'react';
import CategoryOneData from './../../JSON/Category1.json'
import './CategoryOne.css'

function CategoryOne(props) {
    return (
        <div className="category-data">
            <h2 className="category-title">Category 2</h2>
            <div className="category-container">
                {CategoryOneData.slice(0, 1).map((blog, index) => (
                    <div className="big-card-second-category" key={index} data-aos="fade-up">
                        <img src={blog.imgPath} alt="cabinet"></img>
                        <div className="text-content">
                            <h1>{blog.blogTitle}</h1>
                            <p className="by-author">{blog.author}</p>
                        </div>
                    </div>
                ))}
                {CategoryOneData.slice(1).map((blog, index) => (
                    <div className="category-small-card" key={index} data-aos="fade-up">
                        <div className="sm-card-img-cont">
                            <img src={blog.imgPath} alt="cabinet" />
                        </div>
                        <div className="cat-sm-card-text-content">
                            <h3>{blog.blogTitle}</h3>
                            <p className="description">{blog.articleDescription}</p>
                            <p className="by-author">{blog.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryOne;