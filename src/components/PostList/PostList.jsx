import postsFromServer from '../../api/posts.json';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = () => (
  <div className="PostList">
    {postsFromServer.map(post => (
      <PostInfo key={post.id} post={post} />
    ))}
  </div>
);
