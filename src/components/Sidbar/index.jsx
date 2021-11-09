import React from "react";
import {
  Container,
  Header,
  Wrepper,
  Link,
  IconWrapper,
  activeStyle,
  Logout,
} from "./style";
import logo from "../../assets/imgs/logo.png";
import { sidebar } from "../../utils/sidebar";
import { ReactComponent as Chiqish } from "../../assets/icons/logout.svg";
export const Sidebar = () => {
  return (
    <Container>
      <Header>
        <Header.Logo src={logo} alt="img" />
        <Wrepper>
          <Wrepper.Title>Fast Food</Wrepper.Title>
          <Wrepper.Desc>Online maxsulot sotuvi</Wrepper.Desc>
        </Wrepper>
      </Header>
      <Wrepper left>
        {sidebar.map(({ title, Icon, path }) => (
          <Link activeStyle={activeStyle} to={path}>
            <IconWrapper>
              <Icon />
            </IconWrapper>
            {title}
          </Link>
        ))}
        <Logout>
          <IconWrapper>
            <Chiqish />
          </IconWrapper>
          Chiqish
        </Logout>
      </Wrepper>
    </Container>
  );
};

export default Sidebar;
