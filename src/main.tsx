import styled from "@emotion/styled";

type Props = {
  fontWeight?: "bold" | "normal";
};

export const StyledButton = styled("button")<Props>((props) => ({
  "text-align": "center",
  "font-weight": props.fontWeight,
}));
