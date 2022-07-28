import { StyledOpera } from "./styles/Opera.Styled"

const Opera = ({ children }) => {
  return (
    <StyledOpera className="operaContainer">
      {children}
    </StyledOpera>
  )
}

export default Opera