import './CommentList.scss';
import commentsFromServer from '../../api/comments.json';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ postId }) => {
  const commentsForPost = commentsFromServer.filter(
    comment => comment.postId === postId,
  );

  return (
    <div className="CommentList">
      {commentsForPost.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
