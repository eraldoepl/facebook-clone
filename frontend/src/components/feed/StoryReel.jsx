import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://t3.ftcdn.net/jpg/04/48/61/48/240_F_448614849_QX0PP6c37AYP0niDj9kFgBCtNGyzwo4M.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/51125211?v=4"
        title="Familia Cerditos"
      />
      <Story
        image="https://t3.ftcdn.net/jpg/04/52/24/74/240_F_452247467_uSgP1s2JxxBzUzto77Nl1rexdCO67HBa.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/51125211?v=4"
        title="Trabajador Herrero"
      />
      <Story
        image="https://t3.ftcdn.net/jpg/04/53/24/80/240_F_453248030_UYUAjOvUd9oull3Pe6FoLwVtikIEAjE6.jpg"
        profileSrc="https://avatars.githubusercontent.com/u/51125211?v=4"
        title="Familia Envejecientes"
      />
    </div>
  );
};

export default StoryReel;
