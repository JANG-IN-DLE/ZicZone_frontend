import React from 'react'
import company_logo from './../../../common/header/assets/Comp_Logo.png'
import MypageUserPick from './MypageUserPick'

const MypagePickHistory = () => {

        const Pick_History = {
                user_id: '토스',
                company_logo: company_logo,
                company_intro: '공인인증서를 스마트폰에 넣는 것조차 매우 번거로웠으며, 보안카드 번호를 착각해 3회 이상 잘못 입력하였을 경우 은행에 방문해 보안카드 재발급 절차를 밟아야 했다. 한마디로 사용자 '
        }

        return (
                <div className='pick_purchase_history'>
                        <MypageUserPick
                                user_id={Pick_History.user_id}
                                company_logo={Pick_History.company_logo}
                                company_intro={Pick_History.company_intro}
                        />
                </div>
        )

}

export default MypagePickHistory