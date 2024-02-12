import { useNavigate } from 'react-router-dom';
import { addPost } from '../../../redux/postsRedux';
import PostsForm from '../PostsForm/PostsForm';
import { useDispatch } from 'react-redux';

const AddPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = post => {
    dispatch(addPost(post));
    navigate('/');
  };

  return <PostsForm action={handleSubmit} actionText='Add post' />;
};

export default AddPostForm;