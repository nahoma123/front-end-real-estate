import React from "react";
import styled from "@emotion/styled";
import Logo from '../../../assets/images/thumb_freelets.png'; // Import the image file

const PictureContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
`;

const Picture = styled.img`
  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 80px;
  object-fit: contain;
`;

const LogoImg = () => {
  return (
    <PictureContainer>
      <Picture src={Logo} alt="logo Image" />
    </PictureContainer>
  );
};

export default LogoImg;
