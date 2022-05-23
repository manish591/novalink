import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { API_STATE } from 'common';
import { Loader } from 'components';
import { useUploadMedia } from '../hooks/useUploadMedia';
import { createMyPost } from '../postsSlice';

const CreatePostModal = ({ setIsOpenPostModal }) => {
  const [imageFileName, setImageFileName] = useState('');
  const [isImageUploading, setIsImageUploading] = useState(API_STATE.IDLE);
  const [myPostData, setMyPostData] = useState({
    mediaURL: '',
    content: '',
    deleteToken: '',
  });

  const { uploadImage, deleteImage } = useUploadMedia();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);

  const handleUploadFile = async (e) => {
    setIsImageUploading(API_STATE.LOADING);
    if (imageFileName) {
      await deleteImage(myPostData, setMyPostData);
    }
    setImageFileName(e.target.files[0].name);
    await uploadImage(e.target.files[0], setMyPostData);
    setIsImageUploading(API_STATE.SUCCESS);
  };

  const handleCreateMyPost = () => {
    dispatch(createMyPost({ postData: myPostData, token }));
    setIsOpenPostModal((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 bg-[rgba(25,25,25,50%)] z-[30]">
      <div className="fixed inset-0 sm:w-[95%] lg:w-[800px] sm:m-auto sm:h-max bg-white z-20 grid grid-rows-[auto_minmax(0,_1fr)_auto]">
        <div className="shadow py-3 sm:py-4">
          <section className="w-11/12 m-auto flex items-center justify-between">
            <button
              type="button"
              className="flex items-center justify-center"
              onClick={() => {
                setIsOpenPostModal((prev) => !prev);
              }}>
              <span className="material-icons-outlined">west</span>
            </button>
            <h1 className="text-xl font-bold">Create Post</h1>
            <button
              type="button"
              className="font-bold"
              onClick={handleCreateMyPost}
              disabled={
                myPostData.mediaURL === '' || myPostData.content === ''
              }>
              Done
            </button>
          </section>
        </div>
        <section className="mt-4 sm:mt-0 overflow-y-auto">
          <div className="w-11/12 m-auto sm:w-[100%]">
            <section className="grid gap-4 grid-cols-1 sm:grid-cols-[60%,minmax(0,1fr)]">
              <section className="sm:col-start-2 sm:py-2 sm:pr-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full">
                    <img
                      src="https://i.pravatar.cc/150?img=19"
                      alt="avatar"
                      className="min-w-full rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      manish18
                    </h3>
                    <p className="text-xs sm:text-sm">Allenton, New Mexico</p>
                  </div>
                </div>
                <form className="mt-4">
                  <section>
                    <textarea
                      name="caption"
                      id="caption"
                      className="resize-y py-2 px-2 border-gray-200 outline-none text-base"
                      placeholder="What is in your mind manish?"
                      value={myPostData.content}
                      onChange={(e) =>
                        setMyPostData({
                          ...myPostData,
                          content: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="caption" className="sr-only">
                      caption
                    </label>
                  </section>
                </form>
              </section>
              <section className="py-2 sm:py-0 sm:col-start-1 sm:col-end-2 sm:row-start-1">
                <h1 className="sm:hidden">Add or Remove photos</h1>
                {isImageUploading === API_STATE.LOADING ? (
                  <Loader />
                ) : (
                  <div className="w-[150px] sm:w-[100%] mt-2 sm:mt-0">
                    <img
                      src={myPostData.mediaURL}
                      alt=""
                      className="max-w-full aspect-square sm:aspect-none object-cover"
                    />
                  </div>
                )}
              </section>
            </section>
          </div>
        </section>
        <section className="mt-4 pb-4 sm:hidden">
          <div className="w-11/12 m-auto grid grid-cols-2 gap-4">
            <form>
              <label
                htmlFor="upload"
                className="border py-2 px-4 rounded-md flex gap-2 items-center inline-block">
                <span className="material-icons-outlined">image</span>
                <span className="text-sm">Media</span>
              </label>
              <input
                type="file"
                name="upload"
                id="upload"
                className="invisible sr-only"
                onChange={handleUploadFile}
              />
            </form>
            <button
              type="button"
              className="border py-2 px-4 rounded-md flex gap-2 items-center">
              <span className="material-icons-outlined">insert_link</span>
              <span className="text-sm">Attachment</span>
            </button>
            <button
              type="button"
              className="border py-2 px-4 rounded-md flex gap-2 items-center">
              <span className="material-icons-outlined">place</span>
              <span className="text-sm">Location</span>
            </button>
            <button
              type="button"
              className="border py-2 px-4 rounded-md flex gap-2 items-center">
              <span className="material-icons-outlined">person_add</span>
              <span className="text-sm">Add Someone</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

CreatePostModal.propTypes = {
  setIsOpenPostModal: PropTypes.func.isRequired,
};

export { CreatePostModal };
