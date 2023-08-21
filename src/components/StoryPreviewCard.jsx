"use client"

import Link from "next/link";
import _ from 'lodash';

const StoryPreviewCard = ({ id, title, subtitle, story }) => {
  const truncatedStory = _.truncate(story, {
    'length': 100,
  });

  return (
    <article className="flex max-w-xl flex-col items-start justify-between" style={{ border: "0px solid #D2C6F7", padding: "40px", borderRadius: "10px", boxShadow: "1px 4px 13px 2px #D2C6F7", marginTop: "30px" }}>
      <div className="flex items-center gap-x-4 text-xs">
        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
          {id}
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gra y-600">
          <Link href={`/story/${id}`}>
            <span className="absolute inset-0"></span>
            {title}
          </Link>
        </h3>
        <h4 className='text-sm text-gray-500'>
          {subtitle}
        </h4>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">     
          {truncatedStory}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
              <span className="absolute inset-0"></span>
              Michael Foster
          </p>
        </div>
      </div>
    </article>
  )
}

export default StoryPreviewCard;

