import './CommentList.scss';
import commentsFromServer from '../../api/comments.json';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments, postId }) => {
  const commentsToRender =
    comments ?? commentsFromServer.filter(comment => comment.postId === postId);

  if (commentsToRender.length === 0) {
    return (
      <div className="CommentList">
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </div>
    );
  }

  return (
    <div className="CommentList">
      {commentsToRender.map(comment => (
        <CommentInfo key={comment.id} postId={postId} comment={comment} />
      ))}
    </div>
  );
};
