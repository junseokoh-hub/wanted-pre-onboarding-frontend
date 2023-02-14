import { css, Global } from "@emotion/react";

const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

const GlobalStyles = () => {
  return <Global styles={globalStyles} />;
};

export default GlobalStyles;
