import React from "react";

function Article(props) {
    return (
      <article>
        <h3>{props.title}</h3>
        {props.date ? (
          <small>{props.date}</small>
        ) : (
          <small>January 1, 1970</small>
        )}
        {props.preview ? (
          <p>{props.preview}</p>
        ) : (
          <p>No preview available</p> // Fixed default
        )}
      </article>
    );
  }

  export default Article