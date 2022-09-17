import styled from "@emotion/styled";

type Props = {
  fontWeight?: 'bold' | 'normal'
}

const StyledButton = styled('button')<Props>({
  padding: '2px',
},
(props) => ({
  'text-align': 'center',
  'font-weight': props.fontWeight,
}))
export { StyledButton };
