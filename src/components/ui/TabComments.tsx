export default function TabComments() {
  return (
    <div className="min-h-[300px]">
      <h2 className="text-2xl font-bold mb-4">Bình luận</h2>
      {/* Thêm nội dung comments ở đây */}
      <div className="space-y-4">
        <div className="bg-[var(--menu-bg)] p-4 rounded-lg">
          <div className="font-semibold">Người dùng 1</div>
          <div className="text-sm">Nội dung bình luận 1</div>
        </div>
        <div className="bg-[var(--menu-bg)] p-4 rounded-lg">
          <div className="font-semibold">Người dùng 2</div>
          <div className="text-sm">Nội dung bình luận 2</div>
        </div>
      </div>
    </div>
  );
} 