import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import RDescription from "./RDescription";
import PostView from "./PostView";
import Button from "./Button";
import CommentList from "./comment/CommentList";
import "../styles/RDBoard.css";
import ConfirmModal from "./ConfirmModal";
import Layout from "../../common/layout/layout";

const RDBoard = () => {
  const { corrId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [userId, setUserId] = useState(location.state?.userId || localStorage.getItem("userId"));
  const [initialFileName, setInitialFileName] = useState(location.state?.fileName || "");
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCommentSelected, setIsCommentSelected] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [userProfile, setUserProfile] = useState({
    berry: '',
    jobs: [],
    gender: '',
    userName: '',
    career: '',
    point: '',
    intro: '',
    stacks: [],
    isOwner: false
  });

  const [postData, setPostData] = useState({
    title: '',
    content: '',
    fileUrl: '',
    fileName: '',
    commSelection: false
  });

  const handleEdit = () => {
    navigate('/cuboard', { state: { postData, isEditMode: true, userId, corrId } });
    setIsEditMode(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/personal/board/${corrId}/${userId}`);
      navigate('/helpzone');
    } catch (error) {
      console.error("오류 메시지: ", error);
    }
  };

  useEffect(() => {
    const fetchProfileAndPost = async () => {
      try {
        const profileResponse = await axios.get(`/api/user/board/profile/${corrId}`);
        const postResponse = await axios.get(`/api/user/board/${corrId}`);

        const profileData = profileResponse.data;
        const isOwner = profileData.userId === Number(userId);

        setUserProfile({
          berry: profileData.corrPoint,
          jobs: profileData.jobName.split(','),
          gender: profileData.gender,
          userName: profileData.userName,
          career: profileData.personalCareer,
          point: profileData.berryPoint,
          intro: profileData.userIntro,
          stacks: profileData.techUrl ? profileData.techUrl.split(',') : [],
          isOwner: isOwner
        });

        const postData = postResponse.data;
        setPostData({
          title: postData.corrTitle,
          content: postData.corrContent,
          fileUrl: postData.corrPdfUrl,
          fileName: postData.corrPdfFileName,
          commSelection: postData.commSelection
        });

        setIsCommentSelected(postData.commSelection);
        setIsLoading(false);
      } catch (error) {
        console.error("오류 메시지: ", error);
      }
    };

    fetchProfileAndPost();
  }, [corrId, userId]);

  const handleCommentSelected = () => {
    setIsCommentSelected(true);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const confirmDelete = async () => {
    await handleDelete();
    closeDeleteModal();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  };

  return (
    <div>
      <Layout>
        <div className="b_section">
          <div className="b_profile_card">
            <ProfileCard {...userProfile} isViewMode={true} />
          </div>
          <div className="b_right">
            <div className="b_description">
              <div className="b_display_btn">
                <p className="d_title">게시물 조회</p>
                {userProfile.isOwner && !isCommentSelected && (
                  <div className="b_edit_delete">
                    <Button type="button" className="b_edit" onClick={handleEdit}>
                      수정
                    </Button>
                    <Button type="button" className="b_delete" onClick={openDeleteModal}>
                      삭제
                    </Button>
                  </div>
                )}
              </div>
              <RDescription />
              <PostView
                title={postData.title}
                content={postData.content}
                fileUrl={postData.fileUrl}
              />
              <div className="b_comment">
                <CommentList corrId={corrId} userId={userId} onCommentSelected={handleCommentSelected} />
              </div>
            </div>
          </div>
        </div>
        <ConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          onConfirm={confirmDelete}
          message="정말로 게시물을 삭제하시겠습니까?"
          mode="delete"
        />
      </Layout>
    </div>
  );
}

export default RDBoard;