import React from 'react';
import { Dashboard } from '../components/Dashboard';
import { ReviewCard } from '../components/ReviewCard';
import { BottomNav } from '../components/BottomNav';
import { StatCard } from '../components/StatCard';
import { useMobile } from '../hooks/use-mobile';
import {
  Image as ImageIcon,
  Video,
  Smile,
  Search,
  MessageSquare,
  Bell,
  Home,
  Users,
  User,
  Menu,
  ThumbsUp,
  MessageCircle,
  Share2,
  Globe,
  MoreHorizontal,
} from 'lucide-react';
import { NavLink } from '../components/NavLink';

// --- Mock Data ---

interface Post {
  id: number;
  userName: string;
  userAvatarUrl: string;
  timestamp: string;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  shares: number;
}

const MOCK_POSTS: Post[] = [
  {
    id: 1,
    userName: 'Ahmed Ali',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=1',
    timestamp: '2 hours ago',
    content: 'Just deployed the new feed feature! So excited for everyone to try it out. The performance boost is massive!',
    likes: 152,
    comments: 24,
    shares: 5,
  },
  {
    id: 2,
    userName: 'Sara Khalid',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=10',
    timestamp: '1 day ago',
    content: 'Amazing sunset view from the balcony tonight. Sometimes you just need to pause and appreciate the simple things.',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    likes: 98,
    comments: 15,
    shares: 2,
  },
  {
    id: 3,
    userName: 'Development Team',
    userAvatarUrl: 'https://i.pravatar.cc/150?img=5',
    timestamp: '3 days ago',
    content: 'We are looking for beta testers for our upcoming video chat feature. Drop a comment if you are interested!',
    likes: 345,
    comments: 89,
    shares: 12,
  },
];

const MOCK_STORIES = [
  { id: 1, name: 'You', img: 'https://i.pravatar.cc/150?img=3', isNew: true },
  { id: 2, name: 'Omar', img: 'https://i.pravatar.cc/150?img=4', isNew: false },
  { id: 3, name: 'Leena', img: 'https://i.pravatar.cc/150?img=5', isNew: false },
  { id: 4, name: 'Faisal', img: 'https://i.pravatar.cc/150?img=6', isNew: false },
];

// --- Sub-Components ---

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between bg-white px-4 shadow-sm md:hidden">
      <h1 className="text-3xl font-bold text-blue-600">facebook</h1>
      <div className="flex space-x-2">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          <Search size={20} />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200">
          <MessageSquare size={20} />
        </button>
      </div>
    </header>
  );
};

const CreatePostWidget: React.FC = () => {
  const userAvatar = 'https://i.pravatar.cc/150?img=3'; // Mock current user avatar

  return (
    <div className="mb-4 rounded-lg bg-white p-3 shadow">
      <div className="flex items-center border-b border-gray-200 pb-3">
        <img
          src={userAvatar}
          alt="User Avatar"
          className="h-10 w-10 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="ml-3 flex-grow rounded-full bg-gray-100 py-2 px-4 text-sm focus:outline-none"
        />
      </div>
      <div className="mt-3 flex justify-around pt-2">
        <button className="flex flex-1 items-center justify-center p-1 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
          <Video className="mr-2 h-5 w-5 text-red-500" />
          Live Video
        </button>
        <button className="flex flex-1 items-center justify-center p-1 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg border-l border-r border-gray-100">
          <ImageIcon className="mr-2 h-5 w-5 text-green-500" />
          Photo
        </button>
        <button className="flex flex-1 items-center justify-center p-1 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg">
          <Smile className="mr-2 h-5 w-5 text-yellow-500" />
          Feeling
        </button>
      </div>
    </div>
  );
};

const StorySection: React.FC = () => {
  return (
    <div className="mb-4 flex space-x-2 overflow-x-auto bg-white p-2 shadow md:rounded-lg md:p-4">
      {MOCK_STORIES.map((story) => (
        <div key={story.id} className="relative w-24 flex-shrink-0 cursor-pointer">
          <div
            className={`h-40 w-full rounded-xl bg-cover bg-center transition duration-200 ease-in-out hover:scale-[1.02]`}
            style={{ backgroundImage: `url(${story.img})` }}
          >
            {/* Story Border */}
            <div className={`absolute inset-0 rounded-xl border-2 ${story.isNew ? 'border-blue-500' : 'border-white'}`}></div>
          </div>
          {story.isNew ? (
            <div className="absolute top-2 left-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 p-0.5 text-white ring-4 ring-white">
              <span className="text-xl">+</span>
            </div>
          ) : (
            <img
              src={story.img}
              alt={story.name}
              className="absolute top-2 left-2 h-8 w-8 rounded-full border-2 border-blue-600 object-cover"
            />
          )}

          <p className="absolute bottom-2 left-1.5 w-full truncate text-xs font-semibold text-white drop-shadow-md">
            {story.name}
          </p>
        </div>
      ))}
    </div>
  );
};


const PostCard: React.FC<{ post: Post }> = ({ post }) => {
    // ReviewCard structure is repurposed here to serve as a Post Card
  return (
    <ReviewCard className="mb-4 rounded-lg shadow">
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <img
            src={post.userAvatarUrl}
            alt={post.userName}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="ml-3">
            <p className="font-semibold text-gray-900">{post.userName}</p>
            <div className="flex items-center text-xs text-gray-500">
              <span>{post.timestamp}</span>
              <span className="mx-1 text-lg leading-[0]">&middot;</span>
              <Globe size={12} />
            </div>
          </div>
        </div>
        <button className="p-1 rounded-full hover:bg-gray-100">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="px-3 pb-3 text-gray-800">
        <p>{post.content}</p>
      </div>

      {/* Image/Media */}
      {post.imageUrl && (
        <div className="w-full">
          <img
            src={post.imageUrl}
            alt="Post media"
            className="w-full object-cover"
          />
        </div>
      )}

      {/* Reactions and Stats */}
      <div className="flex justify-between px-3 pt-3 text-sm text-gray-500 border-b border-gray-200">
        <div className="flex items-center">
            <ThumbsUp className="h-4 w-4 text-blue-600 fill-blue-600 mr-1" />
            <span className='font-medium'>
                {post.likes}
            </span>
        </div>
        <div className="flex space-x-3">
            <span>{post.comments} Comments</span>
            <span>{post.shares} Shares</span>
        </div>
      </div>

      {/* Actions (Like/Comment/Share) */}
      <div className="flex items-center justify-around py-2">
        <button className="flex flex-1 items-center justify-center space-x-1 rounded-lg py-2 text-gray-600 hover:bg-gray-100">
          <ThumbsUp size={18} />
          <span className="text-sm font-semibold">Like</span>
        </button>
        <button className="flex flex-1 items-center justify-center space-x-1 rounded-lg py-2 text-gray-600 hover:bg-gray-100">
          <MessageCircle size={18} />
          <span className="text-sm font-semibold">Comment</span>
        </button>
        <button className="flex flex-1 items-center justify-center space-x-1 rounded-lg py-2 text-gray-600 hover:bg-gray-100">
          <Share2 size={18} />
          <span className="text-sm font-semibold">Share</span>
        </button>
      </div>
    </ReviewCard>
  );
};


// --- Main Page Component ---

export default function Index() {
  const { isMobile } = useMobile();

  // Desktop Side Nav Mock (using StatCard for quick links/friends list)
  const DesktopSideContent = () => (
    <div className="sticky top-16 hidden w-64 shrink-0 overflow-y-auto xl:block">
      <StatCard className="p-4">
        <h3 className="text-lg font-bold mb-3">Quick Links</h3>
        <ul className="space-y-2">
            <NavLink to="/feed" icon={User} label="Friends" active={false} className="text-gray-700 hover:bg-gray-100 p-2 rounded-lg" />
            <NavLink to="/pages" icon={Users} label="Groups" active={false} className="text-gray-700 hover:bg-gray-100 p-2 rounded-lg" />
            <NavLink to="/market" icon={Home} label="Marketplace" active={false} className="text-gray-700 hover:bg-gray-100 p-2 rounded-lg" />
        </ul>
      </StatCard>
    </div>
  );

  return (
    <Dashboard className="bg-gray-100 min-h-screen">
      <Header />
      
      <div className="md:flex md:justify-center md:space-x-4 p-0 md:p-4">
        
        {/* Left Sidebar (Desktop Only) */}
        <DesktopSideContent />
        
        {/* Main Feed Content */}
        <div className="w-full max-w-xl md:mt-2">
          
          {/* Stories Section */}
          <StorySection />
          
          {/* Create Post */}
          <CreatePostWidget />

          {/* Feed */}
          {MOCK_POSTS.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}

          <div className="h-20 text-center text-gray-500">
            <p className="p-4">You're all caught up!</p>
          </div>
        </div>
        
        {/* Right Sidebar (Desktop Only) - Could be used for Ads/Contacts */}
        <div className="sticky top-16 hidden w-64 shrink-0 overflow-y-auto xl:block">
            <StatCard className="p-4">
                <h3 className="text-lg font-bold mb-3 text-gray-600">Contacts</h3>
                <ul className="space-y-3">
                    {/* Mock contact list */}
                    {['Aisha', 'Fahad', 'Layla', 'Nasser'].map((name, index) => (
                        <li key={index} className="flex items-center space-x-3 text-gray-800 hover:bg-gray-50 p-1 rounded-lg cursor-pointer">
                            <div className="relative">
                                <img src={`https://i.pravatar.cc/150?img=${15 + index}`} alt={name} className="h-8 w-8 rounded-full" />
                                <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white"></span>
                            </div>
                            <span>{name}</span>
                        </li>
                    ))}
                </ul>
            </StatCard>
        </div>
      </div>

      {isMobile && <BottomNav />}
    </Dashboard>
  );
}