import React from "react";

export const withUppercaseTitle =
  (WrappedComponent: React.FC<{ children: string }>) =>
  ({ children }: { children: string }) =>
    <WrappedComponent>{children.toUpperCase()}</WrappedComponent>;
