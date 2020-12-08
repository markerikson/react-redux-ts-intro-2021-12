import React from "react";
import { CodePane, Layout, Fill, Markdown } from "spectacle";

export const LeftContentRightContent = ({
  leftContent,
  leftStyle = {},
  rightContent,
  rightStyle,
}) => (
  <Layout>
    <Fill style={{ marginRight: 5, ...leftStyle }}>{leftContent}</Fill>
    <Fill style={{ marginLeft: 5, ...rightStyle }}>{rightContent}</Fill>
  </Layout>
);

export const LeftCodeRightContent = ({
  leftSource,
  leftLanguage = "jsx",
  ...otherProps
}) => (
  <LeftContentRightContent
    {...otherProps}
    leftContent={<CodePane source={leftSource} lang={leftLanguage} />}
  />
);

export const LeftCodeRightCode = ({
  leftSource,
  leftLanguage = "jsx",
  rightSource,
  rightLanguage = "jsx",
  ...otherProps
}) => (
  <LeftContentRightContent
    {...otherProps}
    leftContent={<CodePane source={leftSource} lang={leftLanguage} />}
    rightContent={<CodePane source={rightSource} lang={rightLanguage} />}
  />
);

export const LeftContentRightMarkdown = ({ children, ...otherProps }) => {
  console.log(children);
  return (
    <LeftContentRightContent
      {...otherProps}
      rightContent={<Markdown>{children}</Markdown>}
    />
  );
};

export const LeftCodeRightMarkdown = ({ children, ...otherProps }) => {
  console.log(children);
  return (
    <LeftCodeRightContent
      {...otherProps}
      rightContent={<Markdown>{children}</Markdown>}
    />
  );
};
