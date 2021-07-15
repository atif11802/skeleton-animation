import React from 'react';
import  SkeletonsElements from "./SkeletonsElements"

const SkeletonProfile = ({theme}) => {

    const themeClass = theme || `light`;

    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton_profile">
                <div>
                    <SkeletonsElements type="avatar" />
                </div>
                <div>
                <SkeletonsElements type="title" />
                <SkeletonsElements type="text" />
                <SkeletonsElements type="text" />
                </div>
            </div>
        </div>
    )
}

export default SkeletonProfile
