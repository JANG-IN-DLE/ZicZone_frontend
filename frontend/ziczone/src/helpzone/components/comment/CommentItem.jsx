import React from "react";
import personal_f_image from "../../../common/card/assets/personal_f_image.png"
import personal_m_image from "../../../common/card/assets/personal_m_image.png";
import "../../styles/comment/CommentItem.css";

const CommentItem = ({ comment }) => {
    // TODO:
    const personal_image = comment.gender === 'MALE' ? personal_m_image : personal_f_image;

    // 이름 가운데 * 처리
    const maskName = (name) => {
        if (name.length < 2) return name;
        if (name.length === 2) {
            return `${name[0]}*`;
        }
        const maskedLength = name.length - 2;
        const start = name[0];
        const end = name[name.length - 1];
        return `${start}${'*'.repeat(maskedLength)}${end}`;
    };

    return (
        <div className="comment_item">
            <div className="ci_gender">
                <img src={personal_image} alt="프로필 사진" className="comment_avatar" />
            </div>
            <div className="ci_body">
                <p className='ci_info'>
                    {maskName(comment.userName)} | {comment.personalCareer}
                </p>
                <p>
                    {comment.commContent}
                </p>
            </div>
        </div>
    );
}

export default CommentItem;