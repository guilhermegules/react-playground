import React from "react";

const Contact = React.lazy(() => import("./Contact"));

const Container = () => {
  const [active, setActive] = React.useState(false);

  return (
    <div>
      {active && (
        <React.Suspense fallback={<p>Loading...</p>}>
          <Contact />
        </React.Suspense>
      )}
      <button onClick={() => setActive(!active)}>Active</button>
    </div>
  );
};

export default Container;
