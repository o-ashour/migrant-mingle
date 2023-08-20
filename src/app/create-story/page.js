import Link from "next/link";

export default function CreateStory() {
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <h1 className="font-semibold text-xl text-gray-600">
                  Create a Post
                </h1>
                <p className="text-gray-500 mb-6 font-medium">
                  Elevating Ideas: Sharing Inspiration, One Post at a Time.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-5">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      autoComplete="given-name"
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="subtitle">Subtitle</label>
                    <input
                      type="text"
                      name="subtitle"
                      id="subtitle"
                      autoComplete="family-name"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="story">Story</label>
                    <textarea
                      id="story"
                      name="story"
                      rows="6"
                      className="border mt-1 rounded px-4 w-full bg-gray-50"
                    ></textarea>
                  </div>
                  <div className="md:col-span-5 text-right">
                    <div className="inline-flex items-end">
                      <Link href="/dashboard">
                        <button
                          type="button"
                          className="bg-primary text-white font-bold py-2 px-4 rounded"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          Post
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
