import React, { useState } from "react";
import { styled } from "styled-components";
// import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState([]);
  let imageCount = 0;
  const handleImageUpload = (event) => {
    // input.files는 유사배열객체 {[index] : file, length: 1}
    const file = event.target.files;
    const reader = new FileReader();
    const fileArray = Array.from(file);

    // fileReading이 끝나면 진행되는 부분
    reader.onloadend = () => {
      setSelectedImage([reader.result, ...selectedImage]);
    };

    // fileArray의 file마다 url reading하는 부분
    fileArray.map((file) => reader.readAsDataURL(file));
  };

  return (
    <StContainer>
      <label htmlFor="file">
        <StUploadBox>{/* <PhotoCameraBackIcon /> */}사진 첨부하기</StUploadBox>
      </label>
      <StInput type="file" name="file" id="file" onChange={handleImageUpload} />
      <StUploadedImageBox>
        {selectedImage.length > 0 &&
          selectedImage.map((file) => {
            return <StImage key={imageCount++} src={file} alt="선택된 이미지" accept="image/*" />;
          })}
      </StUploadedImageBox>
    </StContainer>
  );
}

export default ImageUpload;

const StContainer = styled.div`
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 15px 0;
`;

const StInput = styled.input`
  display: none;
`;

const StUploadBox = styled.div`
  box-sizing: border-box;
  border: 1px solid #e9ecef;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const StUploadedImageBox = styled.div``;

const StImage = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 10px;
`;
