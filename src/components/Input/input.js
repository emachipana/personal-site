import { useTheme } from "../../context/theme-context";
import * as Style from "./styles";

function Input({ label, value, type, placeholder, icon, required = true, ...others }) {
  const { theme } = useTheme();

  const labelParsed = label.toLowerCase().replace(/ /g, "_");

  return (
    <Style.StyledLabel htmlFor={labelParsed}>
    <Style.Text theme={theme}>{label}</Style.Text>
      <Style.Container>
        <Style.StyledInput
          id={labelParsed}
          name={labelParsed}
          value={value}
          type={type || "text"}
          placeholder={placeholder}
          required={required}
          {...others}
        />
        { icon }
      </Style.Container>
    </Style.StyledLabel>
  );
}

export default Input;
