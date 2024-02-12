import { useSelector } from 'react-redux';
import { getPostById, removePost } from '../../redux/postsRedux';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import dateToView from '../../utils/dateToView';
import { useState } from 'react';

const PostDetails = () => {
    const [show, setShow] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
  
    const post = useSelector(state => getPostById(state, id));

    const handleClose = e => {
        e.preventDefault();
        setShow(false);
      };
      const handleShow = e => {
        e.preventDefault();
        setShow(true);
      };
      const remove = e => {
        e.preventDefault();
        dispatch(removePost(id));
      };

    if (!post) return <Navigate to='/' />;
    else
        return (
<>
        <div className=' d-flex justify-content-around'>
          <div className='text'>
            <h2>{post.title}</h2>
            <p className='mb-0'>
              <b>Author: </b>
              {post.author}
            </p>
            <p className='mb-0'>
              <b>Published:</b> {dateToView(post.publishedDate)}
            </p>
            <p>
              <b>Category:</b> {post.category}
            </p>
            <p dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <div className='button'>
            <Button as={Link} to={`/post/edit/${id}`} variant='outline-primary' className='me-1'>Edit</Button>
            <Button onClick={handleShow} variant='outline-danger'>Delete</Button>
          </div>
        </div>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  This operation will completely remove this post from the app.
                  <br /> Are you sure you want to do that?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant='danger' onClick={remove}>
                    Remove
                  </Button>
                </Modal.Footer>
              </Modal>
              </>

    );
};
export default PostDetails;