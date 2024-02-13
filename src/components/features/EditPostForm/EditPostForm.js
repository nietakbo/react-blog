import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { editPost, getPostById } from '../../../redux/postsRedux';
import PostsForm from '../PostsForm/PostsForm';

const EditPostForm = () => {
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = post => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  };
  if (!post) return <Navigate to='/' />;
  return (
    <PostsForm
      action={handleSubmit}
      actionText={'Save changes'}
      title={post.title}
      author={post.author}
      publishedDate={post.publishedDate}
      shortDescription={post.shortDescription}
      content={post.content}
    />
  );
};

export default EditPostForm;