import React from "react";

const empireList = ({ items }) => {
    return (
        <div>
            { items.map( empire => (
                <div className="blog-preview" key={empire.id} >
                    <h2>{ empire.civilization }</h2>
                    <p>Written by { empire.difficulty }</p>
                </div>
            ))}
        </div>
    );
}

export default empireList;