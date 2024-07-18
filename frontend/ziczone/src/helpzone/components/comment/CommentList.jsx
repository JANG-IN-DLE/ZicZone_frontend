import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentInput from "./CommentInput";
import CommentItem from "./CommentItem";

const CommentList = ({ corrId, userId }) => {
    const [comments, setComments] = useState([]);
    const [selectedCommentId, setSelectedCommentId] = useState(null);
    const [board, setBoard] = useState(null);
    const userRole = localStorage.getItem("userRole");

    useEffect(() => {
        fetchComments();
        fetchBoard();
    }, [corrId, userId]);

    const fetchComments = async () => {
        try {
            const response = await axios.get(`/api/user/comments/${corrId}`);
            if (response.status === 200) {
                const commentsData = response.data;
                setComments(commentsData);
                const selectedComment = commentsData.find(comment => comment.commSelection);
                if (selectedComment) {
                    setSelectedCommentId(selectedComment.commId);
                } else {
                    setSelectedCommentId(null);
                }
            }
        } catch (error) {
            console.error("댓글 목록 조회 중 오류 발생:", error);
        }
    };

    const fetchBoard = async () => {
        try {
            const response = await axios.get(`/api/user/board/${corrId}`);
            if (response.status === 200) {
                setBoard(response.data);
            }
        } catch (error) {
            console.error("게시물 정보 조회 중 오류 발생:", error);
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

    const handleCommentSelected = (selectedComment) => {
        setSelectedCommentId(selectedComment.commId);
        setComments(comments.map(comment =>
            comment.commId === selectedComment.commId
                ? { ...comment, commSelection: true }
                : { ...comment, commSelection: false }
        ));
    };

    return (
        <div className="comment-section">
            {
                userRole !== "COMPANY" && (
                    <CommentInput corrId={corrId} userId={userId} onCommentAdded={handleCommentAdded} />
                )
            }
            <ul className="comment-list">
                {comments.map((comment) => (
                    <CommentItem
                        key={`${comment.commId}-${comment.commSelection}`}
                        comment={comment}
                        userId={userId}
                        board={board}
                        selectedCommentId={selectedCommentId}
                        onCommentUpdated={handleCommentUpdated}
                        onCommentDeleted={handleCommentDeleted}
                        onCommentSelected={handleCommentSelected}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CommentList;