import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as Anc } from "react-router-dom";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import FullButton from "../Buttons/FullButton";

export default function TopNavbar() {
	const [sidebarOpen, toggleSidebar] = useState(false);

	return (
		<>
			<Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
			{sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
			<Wrapper
				className="flexCenter animate whiteBg"
				// style={y > 100 ? { height: "60px" } : { height: "80px" }}
			>
				<NavInner className="container flexSpaceCenter">
					<Anc className="pointer flexNullCenter" smooth={true} to={"/"}>
						<LogoIcon />
						<h1 style={{ marginLeft: "3px" }} className="font20 extraBold">
							SheSync
						</h1>
					</Anc>
					<BurderWrapper
						className="pointer"
						onClick={() => toggleSidebar(!sidebarOpen)}
					>
						<BurgerIcon />
					</BurderWrapper>
					<UlWrapper className="flexNullCenter">
						<li className="semiBold font15 pointer hover">
							<Anc style={{ padding: "10px 15px", color: "black" }} to="/">
								Home
							</Anc>
						</li>
						<li className="semiBold font15 pointer hover">
							<Link
								style={{ padding: "10px 15px", color: "black" }}
								to="services"
								spy={true}
								smooth={true}
								offset={-80}
							>
								About
							</Link>
						</li>
						
						{/* <li className="semiBold font15 pointer hover">
							<Link
								activeclassName="active"
								style={{ padding: "10px 15px", color: "black" }}
								to="projects"
								spy={true}
								smooth={true}
								offset={-80}
							>
								Health
							</Link>
						</li> */}
						{/* <li className="semiBold font15 pointer hover">
							<Anc style={{ padding: "10px 15px" , color:"black" }} to="/blog">
								Blogs
							</Anc>
						</li> */}
						
						
						
					</UlWrapper>
					<UlWrapperRight className="flexNullCenter">
						
						<li className="semiBold font15 pointer hover">
							<Anc
								to="/signup"
								style={{
									padding: "10px 15px",
								}}
							>
								Sign in
							</Anc>
						</li>
						{/* <li className="semiBold font15 pointer hover flexCenter">
							<a
								href="/"
								className="radius8 lightBg"
								style={{ padding: "10px 15px" , color:"black" }}
							>
								Get Started
							</a>
						</li> */}
					</UlWrapperRight>
				</NavInner>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: linear-gradient(90deg, #ff758c, #ff7eb3); /* Pink Gradient */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 0;
  backdrop-filter: blur(8px);
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

const BurderWrapper = styled.button`
  outline: none;
  border: 0;
  background-color: transparent;
  padding: 10px 15px;
  cursor: pointer;
  display: none;

  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  gap: 22px;
  list-style: none;

  li {
    transition: transform 0.2s ease-in-out;
  }

  li:hover {
    transform: translateY(-2px);
  }

  a {
    color: white;
    font-size: 22px; /* Increased Font Size */
    font-weight: bold;
    text-decoration: none;
    padding: 8px 14px;
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: #ffd700; /* Gold Highlight */
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

const UlWrapperRight = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;

  a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    padding: 8px 14px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 760px) {
    display: none;
  }
`;

/* Custom Styling for SheSync */
const SheSyncTitle = styled.h1`
  font-size: 26px; /* Bigger Font */
  font-weight: 900; /* Extra Bold */
  font-family: "Poppins", sans-serif;
  background: linear-gradient(45deg,rgba(255, 0, 128, 0.69),rgba(255, 205, 112, 0.65));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* Gradient Text Effect */
  margin-left: 8px;
`;
