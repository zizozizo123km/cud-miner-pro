import React from 'react';
import { Search, MessageCircle, PlusCircle, Bell, User, Monitor, Home, Users, Clock, Compass } from 'lucide-react';
import ReviewCard, { PostData } from './ReviewCard'; 
import BottomNav from './BottomNav';
import { useMobile } from '../hooks/use-mobile'; 
import NavLink from './NavLink';

// --- Dummy Data ---

interface Story {
  id: number;
  user: string;
}

const stories: Story[] = [
  { id: 1, user: 'Your Story' },
  { id: 2, user: 'John Doe' },
  { id: 3, user: 'Jane Smith' },
  { id: 4, user: 'Tech News' },
  { id: 5, user: 'Travel Fan' },
];


const dummyFeed: PostData[] = [
    {
        id: 1,
        author: 'Sarah Connor',
        profilePic: 'https://i.pravatar.cc/150?img=1',
        time: '3h ago',
        text: 'Just finished a marathon coding session! Feeling productive and ready for a break. 💻☕',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        likes: 154,
        comments: 23,
        shares: 5,
    },
    {
        id: 2,
        author: 'Global Events',
        profilePic: 'https://i.pravatar.cc/150?img=2',
        time: '1d ago',
        text: 'Excited about the upcoming launch event! Check out the teaser trailer below.',
        likes: 420,
        comments: 88,
        shares: 12,
    },
    {
        id: 3,
        author: 'Mark Zuckerberg',
        profilePic: 'https://i.pravatar.cc/150?img=3',
        time: '5d ago',
        text: 'The future is immersive. Building the metaverse one byte at a time.',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        likes: 1200,
        comments: 550,
        shares: 150,
    },
];


const Dashboard: React.FC = () => {
  const { isMobile } = useMobile(); // Custom hook to determine layout adaptation

  // --- Header Component (Mobile Top Bar) ---
  const MobileHeader = (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-3 flex justify-between items-center shadow-sm md:hidden">
      <h1 className="text-3xl font-bold text-blue-600">facebook</h1>
      <div className="flex space-x-4">
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          <Search className="w-6 h-6 text-gray-700" />
        </button>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition relative">
          <MessageCircle className="w-6 h-6 text-gray-700" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full ring-2 ring-white">3</span>
        </button>
      </div>
    </div>
  );

  // --- Desktop Header/Nav ---
  const DesktopHeader = (
    <div className="hidden md:flex sticky top-0 z-20 bg-white border-b border-gray-200 p-2 items-center shadow-md justify-between">
        <h1 className="text-3xl font-bold text-blue-600 ml-4 mr-10">facebook</h1>
        
        {/* Search */}
        <div className="hidden lg:block">
            <div className="flex items-center bg-gray-100 p-2 rounded-full w-64">
                <Search className="w-5 h-5 text-gray-500 ml-2" />
                <input
                type="text"
                placeholder="Search Facebook"
                className="bg-transparent text-sm focus:outline-none ml-2"
                />
            </div>
        </div>

        {/* Center Nav Links */}
        <div className="flex flex-grow justify-center space-x-12 mx-auto">
            <NavLink icon={Home} label="Home" to="/" active={true} desktop={true} />
            <NavLink icon={Users} label="Friends" to="/friends" desktop={true} />
            <NavLink icon={Compass} label="Watch" to="/watch" desktop={true} />
            <NavLink icon={User} label="Profile" to="/profile" desktop={true} />
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-3 mr-4">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
              <PlusCircle className="w-6 h-6 text-gray-700" />
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
              <MessageCircle className="w-6 h-6 text-gray-700" />
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition relative">
              <Bell className="w-6 h-6 text-gray-700" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">5</span>
            </button>
            <div className="w-9 h-9 rounded-full bg-gray-300 cursor-pointer overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=50" alt="Profile" className="w-full h-full object-cover" />
            </div>
        </div>
    </div>
  );

  // --- Stories Section ---
  const StoriesSection = (
    <div className="border-b border-gray-200 p-3 overflow-x-auto whitespace-nowrap scrollbar-hide bg-white shadow-sm md:rounded-lg md:mb-4">
      <div className="flex space-x-3">
        {/* 1. Create Your Story Card */}
        <div className="inline-block w-24 flex-shrink-0 cursor-pointer">
          <div className="relative w-full h-40 bg-gray-100 rounded-xl overflow-hidden shadow-md">
            <img src="https://i.pravatar.cc/150?img=50" alt="Your Profile" className="w-full h-2/3 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 w-full h-1/3 bg-white flex flex-col items-center justify-start pt-3">
                <PlusCircle className="w-8 h-8 text-blue-500 bg-white rounded-full absolute -top-4 border-4 border-white" />
                <span className="text-xs font-medium text-gray-800 text-center">
                    Create Story
                </span>
            </div>
          </div>
        </div>

        {/* 2. Other Stories */}
        {stories.slice(1).map((story) => (
            <div key={story.id} className="inline-block w-24 flex-shrink-0 cursor-pointer">
                <div className="relative w-full h-40 rounded-xl overflow-hidden shadow-md ring-2 ring-gray-300 hover:ring-blue-500 transition">
                    <img
                        src={`https://picsum.photos/seed/story-${story.id}/200/300`} 
                        alt={story.user}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition"></div>
                    
                    {/* Profile indicator */}
                    <div className="absolute top-2 left-2 w-8 h-8 rounded-full border-2 border-blue-500 overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?img=${story.id + 5}`} alt={story.user} className="w-full h-full object-cover" />
                    </div>
                    <span className="absolute bottom-2 left-2 text-xs font-semibold text-white text-shadow truncate w-10/12">
                        {story.user}
                    </span>
                </div>
            </div>
        ))}
      </div>
    </div>
  );

  // --- What's on your mind? (Post Creator Shortcut) ---
  const QuickPost = (
    <div className="p-3 bg-white border-b border-gray-200 shadow-sm md:rounded-lg md:mb-4">
      <div className="flex items-center space-x-3 pb-3 border-b border-gray-200">
        <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden">
          <img src="https://i.pravatar.cc/150?img=50" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <button
          className="flex-grow text-left p-2 px-4 rounded-full bg-gray-100 text-sm text-gray-500 hover:bg-gray-200 transition"
        >
          What's on your mind?
        </button>
      </div>
      <div className="flex justify-around pt-3">
        <button className="flex items-center text-sm font-medium text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition">
          <Monitor className="w-5 h-5 text-red-500 mr-2" /> Live Video
        </button>
        <button className="flex items-center text-sm font-medium text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 8l-6 6l-3-3l6-6Z"/><path d="M21 15v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"/><path d="M17 21v-8"/><path d="M10 21v-8"/></svg> Photo/Video
        </button>
        <button className="hidden md:flex items-center text-sm font-medium text-gray-600 hover:bg-gray-100 p-2 rounded-lg transition">
          <Clock className="w-5 h-5 text-yellow-500 mr-2" /> Feeling/Activity
        </button>
      </div>
    </div>
  );

  // --- Main Feed ---
  const MainFeed = (
    <div className="space-y-3 pb-4">
      {/* Separator for mobile */}
      <div className="h-2 bg-gray-200 md:hidden"></div> 

      {dummyFeed.map((post) => (
        <div key={post.id} className='shadow-sm md:rounded-lg md:overflow-hidden'>
            <ReviewCard 
            // Mapping PostData fields directly
            {...post}
            />
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col w-full">
      
      {/* 1. Desktop Header */}
      {DesktopHeader}

      {/* 2. Mobile Header */}
      {MobileHeader}

      {/* 3. Main Content Area */}
      <div className="flex-grow w-full mx-auto">
        <div className="flex justify-center w-full">
            
            {/* Left Sidebar (Desktop Only) */}
            <aside className="hidden lg:block w-64 xl:w-72 p-4 sticky top-[56px] h-[calc(100vh-56px)] overflow-y-auto scrollbar-hide">
                <div className="flex items-center p-2 rounded-lg space-x-3 mb-2 hover:bg-gray-200 cursor-pointer">
                    <img src="https://i.pravatar.cc/150?img=50" alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                    <span className="font-medium text-sm">User Profile</span>
                </div>
                
                <NavLink icon={Users} label="Friends" to="/friends" />
                <NavLink icon={Clock} label="Memories" to="/memories" />
                <NavLink icon={Users} label="Groups" to="/groups" />
                <NavLink icon={Compass} label="Marketplace" to="/marketplace" />
                <div className='border-t border-gray-300 mt-3 pt-3'>
                    <h3 className="font-semibold text-gray-500 mb-2 text-sm">Your Shortcuts</h3>
                    <NavLink icon={Monitor} label="Coding Forum" to="/forum" />
                </div>
            </aside>


            {/* Center Column: Feed */}
            <main className="w-full max-w-xl lg:w-[600px] md:pt-4">
                {/* Stories Section (Above Post Creator on Desktop) */}
                <div className='hidden md:block'>{StoriesSection}</div>
                
                {/* Quick Post */}
                {QuickPost}
                
                {/* Stories Section (Mobile Only - below quick post is common) */}
                <div className='md:hidden'>{StoriesSection}</div>
                
                {/* Main Feed */}
                {MainFeed}
            </main>
            
            {/* Right Sidebar (Desktop Only - Contacts/Sponsors) */}
            <aside className="hidden lg:block w-64 xl:w-72 p-4 sticky top-[56px] h-[calc(100vh-56px)] overflow-y-auto scrollbar-hide">
                <h3 className="font-semibold text-gray-500 mb-4 text-sm">Contacts</h3>
                <div className="space-y-3">
                    {/* Placeholder Contacts */}
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="flex items-center space-x-2 p-1 rounded-lg hover:bg-gray-200 cursor-pointer">
                            <div className="relative">
                                <div className="w-8 h-8 rounded-full overflow-hidden">
                                    <img src={`https://i.pravatar.cc/150?img=${index + 10}`} alt={`Friend ${index}`} className="w-full h-full object-cover" />
                                </div>
                                <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-white"></span>
                            </div>
                            <span className="text-sm">Online Friend {index + 1}</span>
                        </div>
                    ))}
                </div>
            </aside>

        </div>
      </div>

      {/* 4. Bottom Navigation (Mobile Only) */}
      <div className='md:hidden'>
        <BottomNav />
      </div>
      
    </div>
  );
};

export default Dashboard;