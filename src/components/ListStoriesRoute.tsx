import { Link } from "react-router-dom";
import Story from "../models/Story";
import "./ListStoriesRoute.css";

interface Props {
  stories: Story[];
}

const ListStoriesRoute = ({ stories }: Props) => {
  return (
    <div className="ListStoriesRoute">
      <h2>Pick a story</h2>
      <ul>
        {stories.map((story) => (
          <li>
            <Link to={`/stories/${story.id}`}>Mad Lib by: {story.author}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListStoriesRoute;
