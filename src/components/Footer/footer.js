import { useTheme } from "../../context/theme-context";
import { socials } from "../../data/social";
import * as Style from "./styles";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";

function Footer() {
  const { theme } = useTheme();
  
  return (
    <Style.Container theme={theme}>
      <Style.Title>Contact me</Style.Title>
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
        <Style.Text>or</Style.Text>
        <Style.Text>
          <HiOutlineMail />
          {" "}
          emachipana0102@gmail.com
        </Style.Text>
        <Style.Text>
          <AiFillPhone />
          +51 984601113
        </Style.Text>
      </Style.Info>
    </Style.Container>
  );
}

export default Footer;
