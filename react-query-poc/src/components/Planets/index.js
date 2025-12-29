import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";

import Planet from "../Planet";
import getPlanets from "../../services/planets-service";

const Planets = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["planets", page],
    getPlanets
  );

  return (
    <div>
      <h2>Planets</h2>

      {status === "loading" && <div>...Loading</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <>
          <button
            onClick={() => setPage((previous) => Math.max(previous - 1, 1))}
            disabled={page === 1}
          >
            Previous page
          </button>
          <span>{page}</span>
          <button
            onClick={() =>
              setPage((previous) =>
                !latestData || !latestData.next ? previous : previous + 1
              )
            }
            disabled={!latestData || !latestData.next}
          >
            Next page
          </button>
          <div>
            {resolvedData.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
