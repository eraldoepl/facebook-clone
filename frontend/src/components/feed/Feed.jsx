import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/51125211?v=4"
        message="Yoopi this is a message"
        timestamp="1630689702562"
        imgName="imgName"
        username="Erardo"
      />
    </div>
  );
};

export default Feed;
