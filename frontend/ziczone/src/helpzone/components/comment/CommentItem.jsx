import React, { useState, useEffect } from "react";
import axios from "axios";
import personal_f_image from "../../../common/card/assets/personal_f_image.png";
import personal_m_image from "../../../common/card/assets/personal_m_image.png";
import "../../styles/comment/CommentItem.css";
import selectIcon from "../../assets/selectIcon.png";

const CommentItem = ({ comment, board, userId, selectedCommentId, onCommentUpdated, onCommentDeleted, onCommentSelected }) => {

    // useEffect(() => {
    //     console.log("Comment data:", comment);
    //     console.log("Selected comment ID:", selectedCommentId);
    //     console.log("Board data:", board);
    // }, [comment, selectedCommentId, board]);

    const personal_image = comment.gender === 'MALE' ? personal_m_image : personal_f_image;

    const [isEditing, setIsEditing] = useState(false);
    const [editComment, setEditComment] = useState(comment.commContent);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditComment(comment.commContent);
    };

    const handleSaveClick = async () => {
        try {
            const response = await axios.put(`http://localhost:12000/api/comments/${comment.commId}/${userId}`, {
                commContent: editComment,
                corrId: comment.corrId
            });
            if (response.status === 200) {
                onCommentUpdated(response.data);
                setIsEditing(false);
            }
        } catch (error) {
            console.error("댓글 수정 실패:", error.response ? error.response.data : error.message);
        }
    };

    const handleDeleteClick = async () => {
        try {
            await axios.delete(`http://localhost:12000/api/comments/${comment.commId}/${userId}`);
            onCommentDeleted(comment.commId);
        } catch (error) {
            console.error("댓글 삭제 실패:", error.response ? error.response.data : error.message);
        }
    };

    const handleSelectClick = async () => {
        try {
            const response = await axios.post(`http://localhost:12000/api/comments/${comment.commId}/select`, {}, {
                params: { userId: userId }
            });
            if (response.status === 200) {
                console.log(response.data);
                onCommentSelected(response.data);
            }
        } catch (error) {
            console.error("댓글 채택 실패:", error.response ? error.response.data : error.message);
        }
    };

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
        <div>
            {comment.commSelection && (
                <div className="ci_select_show">
                    <img src={selectIcon} alt="채택완료핀" />
                    <p>채택된 댓글</p>
                    <div>
                        {board.corrPoint} 베리
                    </div>
                </div>
            )}
            <div className="comment_item">
                <div className="ci_gender">
                    <img src={personal_image} alt="프로필 사진" />
                </div>
                <div className="ci_body">
                    <div className='ci_info'>
                        {maskName(comment.userName)} | {comment.personalCareer}
                        <div className="ci_button">
                            {comment.userId === userId && (
                                isEditing ? (
                                    <>
                                        <button
                                            type="button"
                                            onClick={handleCancelClick}
                                            className="ci_edit_btn"
                                        >
                                            취소
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleSaveClick}
                                            className="ci_save_btn"
                                        >
                                            저장
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            type="button"
                                            onClick={handleEditClick}
                                            className="ci_edit_btn"
                                        >
                                            수정
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleDeleteClick}
                                            className="ci_delete_btn"
                                        >
                                            삭제
                                        </button>
                                    </>
                                )
                            )}
                            {board && board.userId === userId && !comment.commSelection && selectedCommentId === null && comment.userId !== userId && (
                                <button
                                    type="button"
                                    onClick={handleSelectClick}
                                    className="ci_select_btn"
                                >
                                    채택하기
                                </button>
                            )}
                        </div>
                    </div>
                    {isEditing ? (
                        <textarea
                            className="ci_edit_textarea"
                            value={editComment}
                            onChange={(e) => setEditComment(e.target.value)}
                        />
                    ) : (
                        <p className="ci_content">
                            {comment.commContent}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommentItem;