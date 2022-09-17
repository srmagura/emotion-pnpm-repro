import React from 'react';
import ReactDOM from 'react-dom/client';

import styled from "@emotion/styled";

type Props = {
  fontWeight?: 'bold' | 'normal'
}

const StyledButton = styled('button')<Props>({
  'background-color': '#aa00bb',
  'border': 0,
  color: "#fff",
  cursor: 'pointer',
  padding: '20px'
},
(props) => ({
  'text-align': 'center',
  'font-weight': props.fontWeight,
}))
export { StyledButton };

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledButton>I AM A BUTTON</StyledButton>
  </React.StrictMode>
)
