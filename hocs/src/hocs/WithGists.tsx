import React from "react";

export const withGists = (WrappedComponent: React.FC<{ gists: unknown[] }>) => {
  const WithGists = (props: Record<string, unknown>) => {
    const [gists, setGists] = React.useState([]);

    React.useEffect(() => {
      fetch("https://api.github.com/gists/public")
        .then((res) => res.json())
        .then((gists) => {
          setGists(gists);
        });
    }, []);

    return <WrappedComponent gists={gists} {...props} />;
  };

  return WithGists;
};
