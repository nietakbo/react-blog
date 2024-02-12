import styles from './AddPost.module.scss';
import AddPostForm from '../../features/AddPostForm/AddPostForm';

const AddPost = props => {
    return(
        <div className={styles.container}>
            <h2>Add Post</h2>
            <AddPostForm />
        </div>
    );
};

export default AddPost;