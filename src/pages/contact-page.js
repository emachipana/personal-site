/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Input from "../components/Input";
import { useTheme } from "../context/theme-context";
import * as Style from "./styes";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineAlternateEmail, MdBusinessCenter, MdBusiness } from "react-icons/md";
import { AiFillPhone, AiOutlineMessage, AiOutlineLike } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import emailjs from "@emailjs/browser"

const IconStyled = css`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translate(0, -50%);
  width: 18px;
  height: 18px;
`

function ContactPage() {
  const { theme } = useTheme();

  const initialData = {
    full_name: "",
    email: "",
    phone: "",
    company: "",
    offer: "",
    message: ""
  }

  const [formData, setFormData] = useState({...initialData})

  const [isSend, setIsSend] = useState(false); 

  const { full_name, email, phone, company, offer, message } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_ya5o1mp","template_amk9z5r", {
      name: full_name,
      to_name: "Enmanuel",
      email: email,
      phone: phone,
      company: company,
      offer: offer,
      message: message
    }, "9FHeLr3ZUyP4scmM2").then(result => {
      console.log(result);
      setFormData(initialData);
      setIsSend(true);
    }).catch(console.error);
  }

  return (
    <Style.MainContainer>
      <Style.Container direction="column">
        <Style.Title>Contact me</Style.Title>
        <Style.Form theme={theme} onSubmit={onSubmit}>
          <Input 
            label="full name"
            placeholder="John Doe"
            icon={<BsFillPersonFill css={IconStyled}/>}
            onChange={onChange}
            value={full_name}
          />
          <Input 
            label="email"
            placeholder="example@gmail.com"
            type="email"
            icon={<MdOutlineAlternateEmail css={IconStyled}/>}
            onChange={onChange}
            value={email}
          />
          <Input 
            label="phone"
            placeholder="+51 984601113"
            icon={<AiFillPhone css={IconStyled}/>}
            onChange={onChange}
            value={phone}
            pattern="[+0-9 ]+"
          />
          <Input 
            label="company"
            placeholder="Company name"
            icon={<MdBusiness css={IconStyled}/>}
            required={false}
            onChange={onChange}
            value={company}
          />
          <Input 
            label="offer"
            placeholder="Software Engineer"
            icon={<MdBusinessCenter css={IconStyled}/>}
            required={false}
            onChange={onChange}
            value={offer}
          />
          <Input 
            label="message"
            placeholder="message"
            icon={<AiOutlineMessage css={IconStyled}/>}
            required={false}
            onChange={onChange}
            value={message}
          />
          <Style.FormButton theme={theme}>
            {
              isSend 
              ?
              <>
                Thanks
                <AiOutlineLike /> 
              </>
              :
              <>
                Send
                <FiSend />
              </>
            }
          </Style.FormButton>
        </Style.Form>
      </Style.Container>
    </Style.MainContainer>
  )
};

export default ContactPage;