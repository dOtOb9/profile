import HomeIcon from '@/components/HomeIcon';
import BlogSection from '@/components/BlogSection';

export default function BlogPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 w-full">
      {/* モバイル: サイドバー表示用ボタンとチェックボックス */}
      <input id="sidebar-toggle" type="checkbox" className="peer hidden" />
      <label
        htmlFor="sidebar-toggle"
        className="fixed top-4 left-4 z-30 lg:hidden bg-blue-500 text-white p-2 rounded-full shadow-lg cursor-pointer"
        aria-label="Open sidebar"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </label>

      {/* モバイル: サイドバー（チェックボックスで表示） */}
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-40 lg:hidden invisible opacity-0 peer-checked:visible peer-checked:opacity-100 transition-all">
        <div className="bg-blue-200 rounded-lg p-8 flex flex-col items-center relative w-11/12 max-w-xs">
          {/* 閉じるボタン */}
          <label
            htmlFor="sidebar-toggle"
            className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl cursor-pointer"
            aria-label="Close sidebar"
          >
            &times;
          </label>
          <HomeIcon />
          <BlogSection isLg={false} />
        </div>
      </div>

      {/* PC画面: 左側サイドバー（モバイル時は非表示） */}
      <div className="flex flex-1 flex-row">
        <div className="w-1/2 h-screen flex flex-col justify-center items-center fixed bg-blue-200 hidden lg:flex">
          <HomeIcon />
          <BlogSection isLg={false} />
        </div>
        <div className="ml-w-1/2">
          { children }
        </div>
      </div>
    </div>
  );
}
