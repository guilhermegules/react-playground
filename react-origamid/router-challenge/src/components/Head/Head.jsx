import React from "react";

const Head = (props) => {
  React.useEffect(() => {
    document.title = `Produtos | ${props.title}`;
  }, [props]);

  return <></>;
};

export default Head;
