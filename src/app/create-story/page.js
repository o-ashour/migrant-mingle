import PostStoryForm from "@/src/components/PostStoryForm";

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
              <PostStoryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
