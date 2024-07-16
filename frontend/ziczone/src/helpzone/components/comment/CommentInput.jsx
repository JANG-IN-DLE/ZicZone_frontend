import React, { useState } from "react";
import axios from "axios";
import Button from "../Button";
import "../../styles/comment/CommentInput.css";

const CommentInput = ({ corrId, userId, commId, onCommentAdded }) => {
    const [commentContent, setCommentContent] = useState('');

    const handleCommentContentChange = (e) => {
        setCommentContent(e.target.value);
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (commentContent.trim() === "") return;

        try {
            const response = await axios.post('/api/personal/comments', {
                commContent: commentContent,
                corrId: corrId,
                userId: userId,
                commId: commId
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                onCommentAdded(response.data);
                setCommentContent('');
            }
        } catch (error) {
            console.error("댓글 등록 실패: ", error.response ? error.response.data : error.message);
        }
    };

    return (
        <form className="comment_input" onSubmit={handleCommentSubmit}>
            <div className="cin_wrapper">
                <input
                    className="cin_input"
                    value={commentContent}
                    onChange={handleCommentContentChange}
                    placeholder="댓글을 입력하세요"
                />
                <div>
                    <Button type="button" className="cin_btn">완료</Button>
                </div>
            </div>
        </form>
    );
}

export default CommentInput;