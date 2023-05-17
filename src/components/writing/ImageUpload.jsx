import React, { useState } from "react";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { setImage } from "../../redux/modules/post";

function ImageUpload({ onImageUpload }) {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState([]);
  let imageCount = 0;

  // const handleImageUpload = (event) => {
  //   // input.files는 유사배열객체 {[index] : file, length: 1}
  //   const file = event.target.files;
  //   const reader = new FileReader();
  //   const fileArray = Array.from(file);

  //   // fileReading이 끝나면 진행되는 부분
  //   reader.onloadend = () => {
  //     setSelectedImage([reader.result, ...selectedImage]);
  //     onImageUpload(file);
  //     console.log("여기는 file확인", file);
  //   };

  //   // fileArray의 file마다 url reading하는 부분
  //   fileArray.map((file) => reader.readAsDataURL(file));
  // };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const fileArray = Array.from(files);

    const promises = fileArray.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => {
          // reader.result contains the Base64 string of the image
          resolve(reader.result);
        };

        reader.onerror = reject;

        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then((images) => {
        // 이전에 업로드된 이미지와 새로 업로드된 이미지를 함께 상태에 추가합니다.
        setSelectedImage((prevImages) => [...prevImages, ...images]);
        onImageUpload(fileArray); // 이 부분은 파일 객체를 넘겨줍니다.
        console.log("이미지 보내고 난 후", fileArray);
      })
      .catch((error) => {
        console.error("Error occurred while reading files:", error);
      });
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
