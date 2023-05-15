import React from 'react'
import * as st from './ListST'
import mainData from '../main/tempData'

function List() {

    return (
        <st.Layout>

            <div className='wrap'>
                <st.MoreContent>
                    <div className='title'>항해마켓 인기중고</div>
                </st.MoreContent>

                <st.MoreWrap>
                    {mainData.map((item) => (
                        <st.MoreItem>
                            <st.ImageContainer>
                                <st.Image src={item.img} />
                            </st.ImageContainer>

                            <st.MoreBody>
                                <div className='title'>{item.title}</div>
                                <div className='price'>{item.price}</div>
                                <div className='address'>{item.address}</div>
                                <div className='interest'>{item.interest}</div>
                            </st.MoreBody>
                        </st.MoreItem>
                    ))}

                </st.MoreWrap>
            </div>

        </st.Layout>
    )
}

export default List