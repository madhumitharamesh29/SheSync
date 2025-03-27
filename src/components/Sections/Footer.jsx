import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function Footer() {
  return (
    <Wrapper>
      <div className="footerBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter">
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <Logo src="/images/shesync.jpg" alt="logo" />
              <Title>SheSync</Title>
            </Link>

            <Link className="whiteColor animate pointer" to="home" smooth={true} offset={-80}>
              <ScrollTopIcon size={35} />
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(135deg, #ff758c, #ff7eb3); /* Gradient BG */
  padding: 30px 0;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 550px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled.img`
  width: 90px;
  height: auto;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  margin-left: 15px;
`;

const ScrollTopIcon = styled(BsFillArrowUpCircleFill)`
  color: #fff;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #ffdfdf;
  }
`;
