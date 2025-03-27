import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<Wrapper id="home" className="container flexSpaceCenter">
			<LeftSide className="flexCenter">
				<div>
					<Title>Balance Your Health, One Cycle at a Time.</Title>
					<HeaderP>
						We provide healthcare solutions to women, covering blogs on reproductive health, vaginal health, and hygiene. Our web app offers proper menstrual hygiene management to reduce school dropout rates and empower women.
					</HeaderP>
					<BtnWrapper>
						<Link to={"/signup"}>
							<FullButton title="Get Started" />
						</Link>
					</BtnWrapper>
				</div>
			</LeftSide>
			<RightSide>
				<ImageWrapper>
					<StyledImg src="/images/menstruation.jpg" alt="healthcare" />
					<QuoteWrapper>
						<QuotesWrapper>
							<QuotesIcon />
						</QuotesWrapper>
						<div>
							<QuoteText>
								<em>Precisely what menstruation is, is not yet very well known.</em>
							</QuoteText>
							<Author>- G. Stanley Hall</Author>
						</div>
					</QuoteWrapper>
					<DotsWrapper>
						<Dots />
					</DotsWrapper>
				</ImageWrapper>
			</RightSide>
		</Wrapper>
	);
}

/* Styles */
const Wrapper = styled.section`
	padding-top: 80px;
	width: 100%;
	min-height: 840px;
	background: #ffffff; /* White Background */
	@media (max-width: 960px) {
		flex-direction: column;
	}
`;

const LeftSide = styled.div`
	width: 50%;
	height: 100%;
	color: #2c2c2c; /* Dark Text */
	@media (max-width: 960px) {
		width: 100%;
		order: 2;
		margin: 50px 0;
		text-align: center;
	}
	@media (max-width: 560px) {
		margin: 80px 0 50px 0;
	}
`;

const RightSide = styled.div`
	width: 50%;
	height: 100%;
	@media (max-width: 960px) {
		width: 100%;
		order: 1;
		margin-top: 30px;
	}
`;

const Title = styled.h1`
	font-size: 50px;
	font-weight: 900;
	color: #800080; /* Deep Purple */
	text-shadow: 2px 2px 8px rgba(128, 0, 128, 0.1);
	@media (max-width: 960px) {
		font-size: 40px;
	}
`;

const HeaderP = styled.p`
	max-width: 470px;
	padding: 15px 0 50px 0;
	line-height: 1.6rem;
	font-size: 18px;
	font-weight: 500;
	color: #444; /* Dark Gray */
	@media (max-width: 960px) {
		text-align: center;
		max-width: 100%;
	}
`;

const BtnWrapper = styled.div`
	max-width: 190px;
	@media (max-width: 960px) {
		margin: 0 auto;
	}
`;

const ImageWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	position: relative;
	z-index: 9;
	@media (max-width: 960px) {
		width: 100%;
		justify-content: center;
	}
`;

const StyledImg = styled.img`
	width: 100%;
	max-width: 400px;
	border-radius: 20px;
	box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3); /* Soft Pink Glow */
	@media (max-width: 560px) {
		width: 80%;
	}
`;

const QuoteWrapper = styled.div`
	position: absolute;
	left: 0;
	bottom: 50px;
	background: rgba(255, 255, 255, 0.9);
	padding: 20px;
	border-radius: 12px;
	box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
	border-left: 5px solid #ff69b4; /* Hot Pink Accent */
	@media (max-width: 960px) {
		left: 20px;
	}
	@media (max-width: 560px) {
		bottom: -50px;
	}
`;

const QuotesWrapper = styled.div`
	position: absolute;
	left: -15px;
	top: -5px;
`;

const QuoteText = styled.p`
	font-size: 16px;
	color: #333;
	font-style: italic;
`;

const Author = styled.p`
	font-size: 14px;
	color: #ff69b4; /* Hot Pink */
	font-weight: bold;
	text-align: right;
	margin-top: 5px;
`;

const DotsWrapper = styled.div`
	position: absolute;
	right: -80px;
	bottom: 100px;
	z-index: 2;
	@media (max-width: 960px) {
		right: 80px;
	}
	@media (max-width: 560px) {
		display: none;
	}
`;
