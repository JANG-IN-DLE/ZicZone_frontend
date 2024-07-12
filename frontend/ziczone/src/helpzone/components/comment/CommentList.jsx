import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

const CommentList = ({ corrId }) => {
    const [comments, setComments] = useState([]);
    const userId = 14; // 임의로 설정된 userId

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

    const handleCommentUpdated = (updatedComment) => {
        setComments(comments.map(comment => (comment.commId === updatedComment.commId ? updatedComment : comment)));
    };

    const handleCommentDeleted = (deletedCommentId) => {
        setComments(comments.filter(comment => comment.commId !== deletedCommentId));
    };

    return (
        <div className="comment-section">
            <CommentInput corrId={corrId} userId={userId} onCommentAdded={handleCommentAdded} />
            <ul className="comment-list">
                {comments.map((comment) => (
                    <CommentItem
                        key={comment.commId}
                        comment={comment}
                        userId={userId}
                        onCommentUpdated={handleCommentUpdated}
                        onCommentDeleted={handleCommentDeleted}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CommentList;