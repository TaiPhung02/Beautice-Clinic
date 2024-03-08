import React, { useRef, useEffect } from "react";
import "./title.css";

const Title = ({
    title,
    heading,
    description,
    widthHeading,
    heightHeading,
    widthDesc,
    heightDesc,
}) => {
    const headRef = useRef(0);
    const descRef = useRef(0);
    useEffect(() => {
        if (headRef.current) {
            headRef.current.style.width = widthHeading;
            headRef.current.style.height = heightHeading;
        }
    }, [headRef, widthHeading, heightHeading]);

    useEffect(() => {
        if (descRef.current) {
            descRef.current.style.width = widthDesc;
            descRef.current.style.height = heightDesc;
        }
    }, [descRef, widthDesc, heightDesc]);

    return (
        <div className="title">
            <h3 className="section-title">{title}</h3>
            <h2 ref={headRef} className="section-heading">
                {heading}
            </h2>
            <p ref={descRef} className="section-desc">
                {description}
            </p>
        </div>
    );
};

export default Title;
