import React from "react";
import { tap } from "rxjs";
import { ajax } from "rxjs/ajax";

export const useHttp = <RequestSucess, RequestError>(url: string) => {
  const [data, setData] = React.useState<RequestSucess | null>(null);
  const [error, setError] = React.useState<RequestError | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    ajax
      .getJSON<RequestSucess>(url)
      .pipe(
        tap(() => {
          setLoading(true);
        })
      )
      .subscribe({
        next: (value) => {
          setLoading(false);
          setData(value);
        },
        error: (err) => {
          setError(err);
          setLoading(false);
        },
        complete: () => setLoading(false),
      });
  }, [url]);

  return {
    data,
    error,
    loading,
  };
};
