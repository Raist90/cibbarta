import { StyledOpera } from "./styles/Opera.styled"

const Opera = ({ children }) => {
  return (
    <StyledOpera className="operaContainer">
      {children}
    </StyledOpera>
  )
}

export default Opera