import React from "react";
import { useParams, useLocation }  from 'react-router-dom';

const PostDetail = () => {
  const location = useLocation();
  console.log(location);

  const { id } = useParams();

  return (
    <>
      <h1>post detail  id {id}</h1>
    </>
  );
};
export default PostDetail;
