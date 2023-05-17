import React, { useEffect, useState } from 'react'
import * as st from './DetailST'
import * as sst from '../main/slideST.js'
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteMyPost, getDetail, getMyInterest, getPost, interestPost, updateMyPost } from '../../api/postApi';

function Detail() {

    const navigation = useNavigate();
    const [interest, setInterest] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const params = useParams();
    const postId = params.id;
    const queryClient = useQueryClient();

    const { data: detailData } = useQuery('detailData', () => getDetail(postId), {
        onError: (error) => {
            if (error === 400) {
                alert('로그인이 필요합니다')
                navigation('/login')
            }
        }
    })

    const { data: moreContent } = useQuery('moreContent', () => getPost(), {
        onError: (error) => {
            if (error === 400) {
                alert('로그인이 필요합니다')
                navigation('/login')
            }
        }
    })

    const { data: myInterest } = useQuery('myInterest', () => getMyInterest(), {
        onError: (error) => {
            if (error === 400) {
                alert('로그인이 필요합니다')
                navigation('/login')
            }
        }
    })

    const currTime = new Date();
    const modiTime = new Date(detailData?.modifiedAt);
    const timeDiffer = currTime - modiTime;
    const timeShown =
        timeDiffer < 60 * 1000
            ? '방금 전'
            : timeDiffer < 60 * 60 * 1000
                ? `${Math.floor(timeDiffer / (60 * 1000))}분 전`
                : timeDiffer < 24 * 60 * 60 * 1000
                    ? `${Math.floor(timeDiffer / (60 * 60 * 1000))}시간 전`
                    : timeDiffer < 7 * 24 * 60 * 60 * 1000
                        ? `${Math.floor(timeDiffer / (24 * 60 * 60 * 1000))}일 전`
                        : timeDiffer < 30 * 24 * 60 * 60 * 1000
                            ? `${Math.floor(timeDiffer / (7 * 24 * 60 * 60 * 1000))}주 전`
                            : `${Math.floor(timeDiffer / (365 * 24 * 60 * 60 * 1000))}년 전`;

    const detailNavHandler = (postId) => {
        navigation(`/detail/${postId}`);
        queryClient.invalidateQueries('detailData');
        queryClient.invalidateQueries('moreContent');
        window.location.reload()
    }

    const interestMutation = useMutation(interestPost);
    const deleteMutation = useMutation(deleteMyPost);
    const updateMutation = useMutation(updateMyPost);

    const interestClickHandler = (postId) => {
        setInterest(!interest)
        const newInterest = interest
        interestMutation.mutateAsync(postId, newInterest)
    }

    const deleteBtn = (postId) => {
        deleteMutation.mutateAsync(postId)
    }

    const updateBtn = (postId) => {
        updateMutation.mutateAsync(postId)
    }

    return (
        <>
            <st.Layout>
                <div className='wrap' key={detailData?.postId}>
                    <st.DetailContent>
                        <sst.LeftMoveBtn />

                        <st.DetailImgWrap>
                            <st.DetailImg src={detailData?.postImage} />
                        </st.DetailImgWrap>
                        <sst.RightMoveBtn />
                    </st.DetailContent>

                    <st.Content>
                        <st.Profile>
                            <st.ProfileImg src='img/logindefault.png' />
                            <st.ProfileContent>
                                <div className='ID'>{detailData?.userId}</div>
                                <div className='Location'>{detailData?.tradeLocation}</div>

                            </st.ProfileContent>
                        </st.Profile>
                        <st.extraContent>
                            {interest ?
                                <st.StarTrue onClick={() => interestClickHandler(detailData.postId)} />
                                : <st.StarFalse onClick={() => interestClickHandler(detailData.postId)} />
                            }
                            <div>??</div>
                        </st.extraContent>
                    </st.Content>

                    <st.Content flexdirection='column' align='flex-start' bordertop='1px solid gray' borderbottom='1px solid gray'>
                        <div className='title'>{detailData?.postTitle}</div>
                        <div className='location'>{detailData?.tradeLocation} {detailData?.specificLocation}</div>
                        <div className='category'>
                            {timeShown}
                        </div>
                        <div className='price'>{detailData?.postPrice.toLocaleString()}원</div>
                        <div className='content'>{detailData?.postContent}</div>
                        <div className='interest'>관심 {detailData?.interestCount}</div>

                    </st.Content>
                    <st.modifyBtn>
                        <div>
                            <span>수정</span>
                            <span className='deletebtn' onClick={() => deleteBtn(detailData?.postId)}>삭제</span>
                        </div>

                        <div>
                            <span>판매자 문의하기</span>
                            <button onClick={() => updateBtn(detailData?.postId)}>끌올입니다</button>
                        </div>
                    </st.modifyBtn>
                </div>


                <div className='wrap'>
                    <st.MoreContent>
                        <div className='title'>항해마켓 인기중고</div>
                        <div className='link' onClick={() => navigation('/list')}>더 구경하기</div>
                    </st.MoreContent>

                    <st.MoreWrap>
                        {moreContent?.map((item) => (
                            <st.MoreItem key={item.postId}>
                                <st.ImageContainer>
                                    <st.Image src={item.postImage} onClick={() => detailNavHandler(item.postId)} />
                                </st.ImageContainer>

                                <st.MoreBody>
                                    <div className='title'>{item.postTitle}</div>
                                    <div className='price'>{item.postPrice.toLocaleString()}원</div>
                                    <div className='address'>{item.tradeLocation}</div>
                                    <div className='interest'>관심 {item.interestCount}</div>
                                </st.MoreBody>
                            </st.MoreItem>
                        ))}
                    </st.MoreWrap>
                </div>
            </st.Layout>
        </>
    )
}

export default Detail