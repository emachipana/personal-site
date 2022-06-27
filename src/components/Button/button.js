import * as Style from "./styles";

function Button({ children, isPrimary }) {
  return (
    <Style.Container 
      href="https://drive.google.com/file/d/17OmBDiCQJIUXjm4VlnaJa8IUMT7Wwbhl/view?usp=sharing"
      target="_blank" 
    >  
      { children }
    </Style.Container>
  );
}

export default Button;