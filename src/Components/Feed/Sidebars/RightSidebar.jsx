import { Avatar, Button } from "@heroui/react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const RightSidebar = () => {
   const trendingTopics = [
      { topic: "Technology", tweets: "125K posts" },
      { topic: "ReactJS", tweets: "54K posts" },
      { topic: "WebDevelopment", tweets: "89K posts" },
      { topic: "Design", tweets: "32K posts" },
      { topic: "CyberSecurity", tweets: "12K posts" },
   ];

   const whoToFollow = [
      { name: "John Smith", handle: "@john_dev", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
      { name: "Sarah Wilson", handle: "@sarah_design", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
      { name: "Alex Jones", handle: "@alex_tech", avatar: "https://i.pravatar.cc/150?u=a04258114e29026302d" },
   ];

   return (
      <aside className="hidden xl:flex flex-col w-80 h-screen sticky top-0 py-6 pl-4 space-y-6">

         {/* Trending Section */}
         <div className="bg-slate-800/40 backdrop-blur-lg border border-white/5 rounded-2xl overflow-hidden">
            <h2 className="text-xl font-bold text-white px-4 py-3 border-b border-white/5">Trends for you</h2>
            <div className="flex flex-col">
               {trendingTopics.map((item, index) => (
                  <div 
                     key={index} 
                     className="px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer flex justify-between items-start"
                  >
                     <div>
                        <p className="text-xs text-slate-400">Trending in {item.topic}</p>
                        <p className="text-sm font-bold text-white mt-0.5">{item.topic}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{item.tweets}</p>
                     </div>
                     <button className="text-slate-400 hover:text-blue-400 p-1.5 rounded-full hover:bg-blue-500/10 transition">
                        <HiOutlineDotsHorizontal />
                     </button>
                  </div>
               ))}
            </div>
         </div>

         {/* Who to Follow */}
         <div className="bg-slate-800/40 backdrop-blur-lg border border-white/5 rounded-2xl overflow-hidden">
            <h2 className="text-xl font-bold text-white px-4 py-3 border-b border-white/5">Who to follow</h2>
            <div className="flex flex-col">
               {whoToFollow.map((user, index) => (
                  <div 
                     key={index} 
                     className="px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer flex items-center justify-between gap-3"
                  >
                     <div className="flex items-center gap-3 overflow-hidden">
                        <Avatar src={user.avatar} size="md" />
                        <div className="truncate">
                           <p className="text-sm font-bold text-white truncate hover:underline">{user.name}</p>
                           <p className="text-xs text-slate-400 truncate">{user.handle}</p>
                        </div>
                     </div>
                     <Button 
                        size="sm" 
                        color="primary"
                        className="rounded-full bg-white text-black font-bold hover:bg-gray-200 px-4 min-w-min h-8"
                     >
                        Follow
                     </Button>
                  </div>
               ))}
            </div>
         </div>

      </aside>
   );
};

export default RightSidebar;
