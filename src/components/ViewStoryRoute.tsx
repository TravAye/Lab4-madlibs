import { useParams } from "react-router";
import { stories } from "../services/StorriesArray";
import "./ViewStoryRoute.css";

interface RouteParams {
  id: string;
}

const ViewStoryRoute = () => {
  const id = useParams<RouteParams>().id;

  const i: number = stories.findIndex((item) => item.id === parseInt(id));

  return (
    <div className="ViewStoryRoute">
      <p>
        This time every year I {stories[i].word1} all the time because I get
        really excited thinking about holiday {stories[i].word2} (plural noun)!
        That’s why I was sitting at the {stories[i].word3} I was really hoping a
        {stories[i].word4} would come by and give me at least {stories[i].word5}
        pieces of holiday {stories[i].word6} !
      </p>
    </div>
  );
};

export default ViewStoryRoute;
