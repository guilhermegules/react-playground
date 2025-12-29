import React, { useState } from "react";
import { usePaginatedQuery } from "react-query";

import getPeople from "../../services/people-service";
import Person from "../Person";

const People = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["people", page],
    getPeople
  );

  return (
    <div>
      <h2>People</h2>

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
            {resolvedData.results.map((person) => (
              <Person key={person.name} person={person} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default People;
