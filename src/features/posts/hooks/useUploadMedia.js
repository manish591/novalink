const useUploadMedia = () => {
  const uploadImage = async (file, updatePostData) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'e18vuphv');
    const requestOptions = {
      method: 'POST',
      body: formData,
    };

    await fetch(
      'https://api.cloudinary.com/v1_1/dcugqfvvg/image/upload',
      requestOptions,
    )
      .then((res) => res.json())
      .then((data) => {
        updatePostData((prev) => {
          return {
            ...prev,
            mediaURL: data.url,
            deleteToken: data.delete_token,
          };
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const deleteImage = async (myPostData, setMyPostData) => {
    try {
      const formData = new FormData();
      formData.append('upload_preset', 'e18vuphv');
      formData.append('token', myPostData.deleteToken);
      const requestOptions = {
        method: 'POST',
        body: formData,
      };
      await fetch(
        'https://api.cloudinary.com/v1_1/dcugqfvvg/delete_by_token',
        requestOptions,
      );
      setMyPostData((prev) => {
        return {
          ...prev,
          mediaURL: '',
          deleteToken: '',
        };
      });
    } catch (err) {
      console.error(err);
      setMyPostData((prev) => {
        return {
          ...prev,
          mediaURL: '',
          deleteToken: '',
        };
      });
    }
  };

  return { uploadImage, deleteImage };
};

export { useUploadMedia };
