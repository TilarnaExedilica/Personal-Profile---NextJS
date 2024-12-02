export default function TabTimeline() {
  return (
    <div className="min-h-[300px]">
      <h2 className="text-2xl font-bold mb-4">Timeline</h2>
      {/* Thêm nội dung timeline ở đây */}
      <div className="space-y-4">
        <div className="bg-[var(--menu-bg)] p-4 rounded-lg">
          <div className="font-semibold">Hôm nay</div>
          <div className="text-sm">Hoạt động mới nhất</div>
        </div>
        <div className="bg-[var(--menu-bg)] p-4 rounded-lg">
          <div className="font-semibold">Tuần trước</div>
          <div className="text-sm">Các hoạt động trong tuần</div>
        </div>
      </div>
    </div>
  );
} 