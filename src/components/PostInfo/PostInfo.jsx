import './PostInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import usersFromServer from '../../api/users.json';

export const PostInfo = ({ post }) => {
  const author =
    post.user || usersFromServer.find(person => person.id === post.userId);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{post.title}</h3>

        <p>
          {' Posted by  '}

          <UserInfo user={author} />
        </p>
      </div>

      <p className="PostInfo__body">{post.body}</p>

      <hr />

      <CommentList comments={post.comments} postId={post.id} />
    </div>
  );
};
