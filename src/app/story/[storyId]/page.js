'use client'

import { doc, getDoc } from "firebase/firestore";
import { getFirestoreInstance } from "@/firebase/clientApp";
import { useState, useEffect } from "react";

export default function StoryDetail({ params: { storyId } }) {
  const firestore = getFirestoreInstance();
  const docId = storyId;

  const [storyDetails, setStoryDetails] = useState({title: 'Placeholder title', subtitle: 'This should be where a subtitle would be', story: 'Imagine this is where the coolest story is written!' })

  useEffect(() => {
    const getStoryDoc = async () => {
      const docRef = doc(firestore, 'stories', docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const storyInfo = {
          ...docSnap.data()
        }
        setStoryDetails(storyInfo)
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    
    if (docId){
      getStoryDoc();
    }
  }, [docId])

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{storyDetails.title}</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                {storyDetails.subtitle}
              </p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                {storyDetails.story}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
