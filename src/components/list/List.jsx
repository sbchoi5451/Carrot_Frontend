import React from 'react'
import * as st from './ListST'
import { useQuery, useQueryClient } from 'react-query';
import { getKeywordApi, getPost } from '../../api/postApi';
import { useLocation, useNavigate } from 'react-router-dom';

function List() {

    const navigation = useNavigate();
    const queryClient = useQueryClient();
    const location = useLocation();
    const searchValue = location.state?.searchValue

    const { data: listData } = useQuery(['listData', searchValue], () => {
        if (searchValue) {
            return getKeywordApi(searchValue)
        } else {
            return getPost();
        }
    })

    const detailNavHandler = (postId) => {
        navigation(`/detail/${postId}`);
    }

    return (
        <st.Layout>

            <div className='wrap'>
                <st.MoreContent>
                    {searchValue ?
                        <div className='title'>검색결과</div>
                        : <div className='title'>항해마켓 인기중고</div>
                    }

                </st.MoreContent>

                <st.MoreWrap>
                    {listData?.map((item) => (
                        <st.MoreItem key={item.postId}>
                            <st.ImageContainer>
                                <st.Image src={item.postImage} onClick={() => detailNavHandler(item.postId)} />
                            </st.ImageContainer>

                            <st.MoreBody>
                                <div className='title'>{item.postTitle}</div>
                                <div className='price'>{`${parseInt(item.postPrice).toLocaleString()}원`}</div>
                                <div className='address'>{item.tradeLocation}</div>
                                <div className='interest'>{`관심 ${item.interestCount}`}</div>
                            </st.MoreBody>
                        </st.MoreItem>
                    ))}

                </st.MoreWrap>
            </div>

        </st.Layout>
    )
}

export default List