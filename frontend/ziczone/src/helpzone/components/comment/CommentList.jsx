import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

const CommentList = ({ corrId, userId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments();
    }, [corrId]);

    const fetchComments = async () => {
        try {
            const response = await axios.get(`http://localhost:12000/api/comments?corrId=${corrId}`);
            setComments(response.data);
        } catch (error) {
            console.error("댓글 목록 조회 중 오류 발생:", error);
        }
    };

    const handleCommentAdded = (newComment) => {
        setComments([...comments, newComment]);
    };

    return (
        <div>
            <CommentInput corrId={corrId} userId={userId} onCommentAdded={handleCommentAdded} />
            <div className="comment-list">
                {comments.map((comment) => (
                    <CommentItem key={comment.commId} comment={comment} />
                ))}
            </div>
        </div>
    );
}

export default CommentList;