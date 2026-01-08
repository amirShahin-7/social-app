const SideBarSkeleton = () => {
  return (
    <aside className="w-full md:w-80 shrink-0 min-h-screen">
      <div className="sticky top-18">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden animate-pulse">
          <div className="h-28 bg-linear-to-r from-indigo-300 via-purple-300 to-pink-300"></div>
          <div className="relative px-5 pb-5">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
            </div>
            <div className="pt-14 text-center space-y-2">
              <div className="h-6 bg-gray-200 rounded w-24 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-32 mx-auto"></div>
            </div>
            <div className="flex justify-center gap-4 mt-4 py-3 border-y border-gray-100">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="h-6 w-8 bg-gray-200 rounded mx-auto"></div>
                  <div className="h-3 w-12 bg-gray-200 rounded mx-auto mt-1"></div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-28"></div>
              <div className="bg-gray-50 rounded-xl p-3 space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
            <div className="mt-4 h-10 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBarSkeleton;
