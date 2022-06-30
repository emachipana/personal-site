import { useTheme } from "../../context/theme-context";
import { socials } from "../../data/social";
import * as Style from "./styles";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";

function Footer() {
  const { theme } = useTheme();
  
  return (
    <Style.Container theme={theme}>
      <Style.Title theme={theme}>Contact me</Style.Title>
      <Style.Info>
        { socials.map((social, index) => (
          <Style.Icon
            key={index}
            href={social.to}
            theme={theme}
            target="_blank"
            >
            { social.icon }
          </Style.Icon>
        )) }
        <Style.Text theme={theme}>or</Style.Text>
        <Style.Text theme={theme}>
          <HiOutlineMail />
          {" "}
          emachipana0102@gmail.com
        </Style.Text>
        <Style.Text theme={theme}>
          <AiFillPhone />
          +51 984601113
        </Style.Text>
      </Style.Info>
    </Style.Container>
  );
}

export default Footer;
