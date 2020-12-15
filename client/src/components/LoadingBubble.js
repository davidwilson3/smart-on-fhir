import React from "react";

const LoadingBubble = ({ text = " [ loading ] " }) => {
    return (
        <div style={{ fontSize: "2em", fontFamily: "unset", marginTop: "25vh" }}>
            <div class='spinner-grow' role='status'>
                <span class='sr-only'>Loading...</span>
            </div>
            {text}
            <div class='spinner-grow' role='status'>
                <span class='sr-only'>Loading...</span>
            </div>
        </div>
    );
};

export default LoadingBubble;
