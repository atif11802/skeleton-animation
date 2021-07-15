import React from 'react'
import "./Skeleton.css";


const SkeletonsElements = ({type}) => {

    const classes = `skeleton ${type}`

    return (
        <div className={classes}>
            
        </div>
    )
}

export default SkeletonsElements;
