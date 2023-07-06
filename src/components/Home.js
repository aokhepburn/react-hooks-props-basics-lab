import React from "react";

function Home( props ) {
  console.log(props.color + 'Home component')
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
