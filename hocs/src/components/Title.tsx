import { withUppercaseTitle } from "../hocs/WithUppercaseTitle";

const Title = withUppercaseTitle(({ children }: { children: string }) => {
  return <h1>{children}</h1>;
});

export default Title;
