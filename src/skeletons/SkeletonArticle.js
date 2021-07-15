import React from 'react';
import SkeletonsElements from './SkeletonsElements'
import Shimmer from "./Shimmer"

const SkeletonArticle = ({theme}) => {
    
    const themeClass = theme || "light";


    return (
        <div className={`skeleton-wrapper ${themeClass}` }>
            <div className="skeleton-articles">
                <SkeletonsElements type="title" />
                <SkeletonsElements type="text" />
                <SkeletonsElements type="text" />
                <SkeletonsElements type="text" />
            </div>
            <Shimmer />
        </div>
    )
}

export default SkeletonArticle
