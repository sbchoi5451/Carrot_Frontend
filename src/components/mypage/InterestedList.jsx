import React, { useCallback, useEffect } from "react";
import { fetchInterestedList } from "../../api/mypageApi";
import { useMutation } from "react-query";

const InterestedList = () => {
  const { mutate: mutateFetchList } = useMutation(fetchInterestedList, {
    onSuccess: (response) => {
      if (response.status === 200) {
        // 정상적으로 받았을때 로직 추가해야함
        console.log(response.data);
      } else {
        // 에러 메세지 확인해야함
        console.log("여기서 출력", response);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // 관심목록 받아오는 함수
  const getInterestedList = () => {
    const InterestedList = mutateFetchList();
    return InterestedList;
  };

  useEffect(() => {
    getInterestedList();
  }, []);

  return (
    <>
      {InterestedList.map((post) => {
        // 게시글 내용 사용
        <div>{post}</div>;
      })}
    </>
  );
};

export default InterestedList;
