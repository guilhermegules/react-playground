import React, { useEffect } from "react";

export const withLog = (WrappedComponent: React.FC) => {
  const WithLogComponent = (props: Record<string, unknown>) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent} mounted.`);

      return () => {
        console.log(`Component ${WrappedComponent} unmounted.`);
      };
    }, []);
    return <WrappedComponent {...props} />;
  };

  WithLogComponent.displayName = `withLogger(${WrappedComponent})`;

  return WithLogComponent;
};
