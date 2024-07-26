import React, { useState } from "react";
import axios from "axios";
import personal_f_image from "../../../common/card/assets/personal_f_image.png";
import personal_m_image from "../../../common/card/assets/personal_m_image.png";
import "../../styles/comment/CommentItem.css";
import selectIcon from "../../assets/selectIcon.png";
import ConfirmModal from "../ConfirmModal";

// 특정 날짜와 현재 시간의 차이 계산 -> 상대적인 시간 반환
export const getRelativeTime = (dateString) => {
    const now = new Date();
    const past = new Date(dateString);
    const diff = now - past;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
        return `${seconds}초 전`;
    } else if (minutes < 60) {
        return `${minutes}분 전`;
    } else if (hours < 24) {
        return `${hours}시간 전`;
    } else {
        return `${days}일 전`;
    }
};

const CommentItem = ({ comment, board, userId, selectedCommentId, onCommentUpdated, onCommentDeleted, onCommentSelected }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editComment, setEditComment] = useState(comment.commContent);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(comment.commSelection);

    const personal_image = comment.gender === 'MALE' ? personal_m_image : personal_f_image;

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

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditComment(comment.commContent);
    };

    const handleSaveClick = async () => {
        try {
            const response = await axios.put(`/api/personal/comments/${comment.commId}/${userId}`, {
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
            await axios.delete(`/api/personal/comments/${comment.commId}/${userId}`);
            onCommentDeleted(comment.commId);
        } catch (error) {
            console.error("댓글 삭제 실패:", error.response ? error.response.data : error.message);
        }
    };

    const handleSelectClick = async () => {
        try {
            const response = await axios.post(`/api/personal/comments/${comment.commId}/select`, {}, {
                params: { userId: userId }
            });
            if (response.status === 200) {
                onCommentSelected({ ...comment, commSelection: true });
                setIsSelected(true);
                closeModal();
            }
        } catch (error) {
            console.error("댓글 채택 실패:", error.response ? error.response.data : error.message);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const confirmSelection = () => {
        handleSelectClick();
    };

    return (
        <div>
            <ConfirmModal isOpen={isModalOpen} onClose={closeModal} onConfirm={confirmSelection} userName={maskName(comment.userName)} corrPoint={comment.corrPoint} />
            {isSelected && (
                <div className="ci_select_show">
                    <img src={selectIcon} alt="채택완료핀" />
                    <p>채택된 댓글</p>
                    <div>
                        {comment.corrPoint} 베리
                    </div>
                </div>
            )}
            <div className="comment_item">
                <div className="ci_gender">
                    <img src={personal_image} alt="프로필 사진" />
                </div>
                <div className="ci_body">
                    <div className='ci_info'>
                        <div className="ci_info_left">
                            {maskName(comment.userName)} | {comment.personalCareer}
                            <span>{getRelativeTime(comment.commModify)}</span>
                        </div>
                        <div className="ci_button">
                            {Number(comment.userId) === Number(userId) && selectedCommentId === null && (
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
                            {board && Number(board.userId) === Number(userId) && !isSelected && selectedCommentId === null && Number(comment.userId) !== Number(userId) && (
                                <button
                                    type="button"
                                    onClick={openModal}
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