import React, { useState } from "react";
import axios from "axios";
import Button from "../Button";
import ConfirmModal from "../ConfirmModal";
import "../../styles/comment/CommentInput.css";
import config from '../../../config';

const CommentInput = ({ corrId, userId, commId, onCommentAdded }) => {
    const [commentContent, setCommentContent] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [commCharCount, setCommCharCount] = useState(commentContent.length);

    const api = axios.create({
        baseURL: config.baseURL
      });

    const handleContentChangeWithCount = (event) => {
      const newContent = event.target.value;
      setCommCharCount(newContent.length);
      handleCommentContentChange(event);
    };

    const handleCommentContentChange = (e) => {
        setCommentContent(e.target.value);
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (commentContent.trim() === "") return;

        if (!userId) {
            setIsModalOpen(true);
            return;
        }

        try {
            const response = await api.post('/api/personal/comments', {
                commContent: commentContent,
                corrId: corrId,
                userId: userId,
                commId: commId,
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                onCommentAdded(response.data);
                setCommentContent('');
                setCommCharCount(0);
            }
        } catch (error) {
            console.error("댓글 등록 실패: ", error.response ? error.response.data : error.message);
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleLoginRedirect = (path) => {
        setIsModalOpen(false);
        window.location.href = path;
    };

    return (
        <div>
            <form className="comment_input" onSubmit={handleCommentSubmit}>
                <div className="cin_wrapper">
                    <input
                        className="cin_input"
                        value={commentContent}
                        onChange={handleContentChangeWithCount}
                        maxLength={255}
                        placeholder="댓글을 입력하세요"
                        />
                      <div className="cin_char_count">{commCharCount}/255</div>
                    <div>
                        <Button type="button" className="cin_btn">완료</Button>
                    </div>
                </div>
            </form>
            <ConfirmModal 
                isOpen={isModalOpen} 
                onClose={handleModalClose} 
                onConfirm={handleLoginRedirect} 
                mode="login" 
            />
        </div>
    );
}

export default CommentInput;