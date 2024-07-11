import React, { useState } from "react";
import axios from "axios";
import Button from "../Button";
import "../../styles/comment/CommentInput.css";

const CommentInput = ({ corrId, userId, onCommentAdded }) => {
    const [commentContent, setCommentContent] = useState('');

    const handleCommentContentChange = (e) => {
        setCommentContent(e.target.value);
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        if (commentContent.trim() === "") return;

        try {
            const response = await axios.post('http://localhost:12000/api/comments', {
                commContent: commentContent,
                corrId: corrId,
                userId: userId
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
            <div className="ci_wrapper">
                <input
                    className="ci_input"
                    value={commentContent}
                    onChange={handleCommentContentChange}
                />
                <div>
                    <Button type="button" className="ci_btn">완료</Button>
                </div>
            </div>
        </form>
    );
}

export default CommentInput;