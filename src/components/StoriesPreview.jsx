'use client'

import StoryPreviewCard from "./StoryPreviewCard";
import { getFirestoreInstance } from "@/firebase/clientApp";
import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";

const StoriesPreview = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(getFirestoreInstance(), "stories"), (snapshot) => {
      const updatedStories = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStories(updatedStories);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      {stories.map(renderStoryPreviewCard)}
    </div>
  );
}

const renderStoryPreviewCard = (story) => (
  <StoryPreviewCard
    key={story.id}
    id={story.id}
    title={story.title}
    subtitle={story.subtitle}
    story={story.story}
  />
);

export default StoriesPreview;
