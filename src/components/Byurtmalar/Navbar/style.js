import styled from "styled-components";
import { ReactComponent as plus } from "../../../assets/icons/plus.svg";
import { ReactComponent as menuH } from "../../../assets/icons/menuH.svg";
import { ReactComponent as menuV } from "../../../assets/icons/menuV.svg";

const getOrder = ({ order }) => {
  switch (order) {
    case "1":
      return 1;
    case "2":
      return 3;
    case "3":
      return 2;
    default:
      return 1;
  }
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const Heder = styled.div`
  display: flex;
  background: white;
  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;
export const Wrepper = styled.div`
  display: flex;
  align-items: center;
  width: ${({ center }) => (center ? "100%" : "300px")};
  height: 90px;
  border: 1px solid #e5e5e5;
  padding: 10px 40px;

  @media (max-width: 1440px) {
    order: ${getOrder};
    display: ${({ order }) => order === "3" && "none"};
    width: 100%;
  }
`;

export const Add = styled.div`
  display: flex;
  align-items: center;
  /* width: 150px; */
  cursor: pointer;
`;

Add.Plus = styled(plus)`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  background: #20d472;
  padding: 11px;
  border-radius: 50%;
`;

Add.Title = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #2d3a45;
  margin-left: 14px;
`;
export const Tab = styled.div`
  font-family: SFProDisplay bold;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  width: 100%;
  background: #edeff3;
  border-radius: 24px;
`;

Tab.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 40px;
  background: ${({ active }) => (active ? "#ffffff" : "transparent")};
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 18px;
  color: #b7bcc0;
  cursor: pointer;
  transition: all 0.1s;
`;
export const Toggle = styled.div`
  display: ${({ toggle }) => (toggle ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  background: #edeff3;
  border-radius: 24px;
  height: 50px;
  width: 100px;
  cursor: pointer;
  padding: 0 6px;
  @media (max-width: 1440px) {
    display: flex;
    margin-left: auto;
  }
`;
export const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  padding: 11px;
  border-radius: 50%;
  background: ${({ active }) => active && "white"};
  transition: all 0.3s;
`;
export const MenuH = styled(menuH)`
  width: 16px;
  height: 16px;
`;
export const MenuV = styled(menuV)`
  width: 16px;
  height: 16px;
`;
