import React from "react";
import { styled } from "@mui/material/styles";

const Image = styled("img")({
  height: "100%",
  objectFit: "cover",
  alignItems: "stretch"
});

interface ImgComponentProps {
  imageUrl: string;
  alt: string;
}

const ImgComponent: React.FC<ImgComponentProps> = ({ imageUrl, alt }) => {
  return <Image src={imageUrl} alt={alt} />;
};

export default ImgComponent;
