import { ReactNode, useState } from "react";
import Story from "../models/Story";
import { stories } from "../services/StorriesArray";
import StoriesContext from "./StoriesContext";

interface Props {
  children: ReactNode;
}

const StoriesContextProvider = ({ children }: Props) => {
  const [storiesArray, setStories] = useState<Story[]>(stories);

  const addStory = (story: Story): void => {
    setStories((prev) => [...prev, story]);
  };

  return (
    <StoriesContext.Provider value={{ stories, addStory }}>
      {children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;
