import React from 'react';
import { useSelector } from 'react-redux';
import { Sidebar, BottomBar } from 'components';
import { BookmarkCard } from './components/card/BookmarkCard';
import { EmptyBookmark } from './components/bookmark-empty/EmptyBookmark';

const Bookmark = () => {
  const userBookmarks = useSelector((state) => state.authentication.bookmarks);
  const allPosts = useSelector((state) => state.post.postData);
  const myBookmarks = allPosts.filter((item) =>
    userBookmarks.includes(item._id),
  );
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] lg:grid-cols-[80px_1fr_350px] gap-4">
      <Sidebar />
      <section className="sm:col-start-2">
        <div className="w-11/12 m-auto flex items-center justify-between py-2 sm:py-4 bg-[white] sticky top-0">
          <div className="flex items-center gap-4">
            <span className="material-icons-outlined">west</span>
            <h1 className="font-semibold text-xl">Saved</h1>
          </div>
        </div>
        <section className="relative w-11/12 m-auto">
          {myBookmarks.length > 0 ? (
            <div className="grid grid-cols-3 lg:grid-cols-4 m-auto gap-1 mt-4 sm:gap-8">
              {myBookmarks.map((item) => {
                return <BookmarkCard key={item._id} post={item} />;
              })}
            </div>
          ) : (
            <EmptyBookmark />
          )}
        </section>
      </section>
      <BottomBar />
    </div>
  );
};

export { Bookmark };
