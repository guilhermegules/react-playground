import React from "react";

const Product = () => {
  React.useEffect(() => {
    const handleScroll = (event) => {
      console.log(event);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean the event when element is removed from DOM
    return () => {
      console.log("removed");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div style={{ height: "200vh" }}>My product</div>;
};

const ScrollEffect = () => {
  const [active, setActive] = React.useState(false);

  return (
    <div>
      <h1>ScrollEffect</h1>
      <button onClick={() => setActive(!active)}>Open</button>
      {active && <Product />}
    </div>
  );
};

export default ScrollEffect;
