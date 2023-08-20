"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { getFirestoreInstance } from "@/firebase/clientApp";

const PostStoryForm = () => {
  const [formValues, setFormValues] = useState({title: '', subtitle: '', story: ''});
  const router = useRouter();

  const handleTitleChange = (e) => {
    setFormValues(prevVal => {return {...prevVal, title: e.target.value}})
  }

  const handleSubtitleChange = (e) => {
    setFormValues(prevVal => { return { ...prevVal, subtitle: e.target.value } })
  }

  const handleStoryChange = (e) => {
    setFormValues(prevVal => { return { ...prevVal, story: e.target.value } })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firestore = getFirestoreInstance();

    try {
      const docRef = await addDoc(collection(firestore, "stories"), {
        title: formValues.title,
        subtitle: formValues.subtitle,
        story: formValues.story,
      });
      console.log("Document written with ID: ", docRef.id);
      alert('Thanks for sharing a story. Press OK to go back to the dashboard.')
      router.push('/dashboard');
    } catch (e) {
      alert('Sorry, Something went wrong. Try again or contact the developers.')
      console.error("Error adding document: ", e);
    }
  }

  return (
    <form className="lg:col-span-2" onSubmit={handleSubmit}>
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-5">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="md:col-span-5">
          <label htmlFor="subtitle">Subtitle</label>
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
            onChange={handleSubtitleChange}
            required
          />
        </div>
        <div className="md:col-span-5">
          <label htmlFor="story">Story</label>
          <textarea
            id="story"
            name="story"
            rows="6"
            className="border mt-1 rounded px-4 w-full bg-gray-50"
            onChange={handleStoryChange}
            required
          ></textarea>
        </div>
        <div className="md:col-span-5 text-right">
          <div className="inline-flex items-end">
            <button
              type="submit"
              className="bg-primary text-white font-bold py-2 px-4 rounded"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PostStoryForm;