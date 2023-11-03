import { withGists } from "../hocs/WithGists";

export const Gists = withGists(({ gists }: { gists: unknown[] }) => (
  <pre>{JSON.stringify(gists, null, 2)}</pre>
));
