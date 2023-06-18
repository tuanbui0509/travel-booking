import { Person, ThumbUpAlt, SendSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getcommentsByIdTour } from '../redux/selectors';
import SubComment from './SubComment';
import { fetchComments } from '../redux/slices/CommentSlice';

export default function Comment({ id }) {
    const dispatch = useDispatch()      // load dữ liệu tour từ server
        // load dữ liệu tour từ server
    useEffect(() => {
        dispatch(fetchComments());
    }, [dispatch]);
  const [comment, setComment] = useState('');
  const [sentComments, setSentComments] = useState([]);
  const comments = useSelector((state) =>
    getcommentsByIdTour(state, id)
  );

  const handleOnChaneComment = (e) => {
    setComment(e.target.value);
  };
  const [showInput, setShowInput] = useState([]);

  const handleToggleInput = (index) => {
    setShowInput((prevShowInput) => {
      const updatedShowInput = [...prevShowInput];
      updatedShowInput[index] = !updatedShowInput[index];
      return updatedShowInput;
    });

    if (!showInput[index]) {
      setSentComments((prevSentComments) => {
        const updatedSentComments = [...prevSentComments];
        updatedSentComments[index] = comment;

        return updatedSentComments;
      });
    }
  };

  const handleSubmitInput = (index) => {
    let idComment = index
    let commenter = "Ma"
    let content = comment
    let comObj = { idComment, commenter, content};
    fetch("http://localhost:5000/api/subComments", {
      method: "POST",
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(comObj)
    })
    .then((res) => res.json())
    .then((data) => {

    })
    .catch((err) => {
      // Handle error
    });
    setComment('');
    showInput[index] = false;
  };

  return (
    <>
      <div className='container-comment'>
        <div className='title'>Đánh giá gần đây</div>
        <div className='comments'>
          {comments.map((item) => (
            <div key={item.id} className='item'>
              <div className='account'>
                <Person />
                {item.commenter}
              </div>
              <div className='content-comment'>
                <div className='container-rate'>
                  <div className='score'>{item.rating}</div>
                  <div className='text-core'>Rất tốt</div>
                  <div className='date'>{item.date}</div>
                </div>
                <div className='text-comment-1'>{item.content}</div>
                {item.contentServer && (
                  <div className='text-comment-server'>{item.contentServer}</div>
                )}

                <div className='container-feedback'>
                  <div className='text-like'>Thích</div>
                  <div className='feedback' onClick={() => handleToggleInput(item.id)}>
                    Phản hồi
                  </div>
                  <div className='quantity-like'>
                    <div className='number'>{item.quantityLike} </div>
                    <div className='container-like'>
                      <ThumbUpAlt />
                    </div>
                  </div>
                </div>
                {showInput[item.id] && (
                  <div className='container-input-feedback'>
                    <input
                      onChange={handleOnChaneComment}
                      className='input-feedback'
                      value={comment}
                      type='text'
                    />
                    <div className='icon-send' onClick={() => handleSubmitInput(item.id)}>
                      <SendSharp />
                    </div>
                  </div>
                )}

                <SubComment id={item.id}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
