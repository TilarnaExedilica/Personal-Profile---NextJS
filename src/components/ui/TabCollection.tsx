
export default function TabCollection() {
  return (
    <div className="min-h-[300px]">
      <h2 className="text-2xl font-bold mb-4">Bộ sưu tập của tôi</h2>
      {/* Thêm nội dung collection ở đây */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Placeholder cho các item trong collection */}
        <div className="bg-[var(--menu-bg)] p-4 rounded-lg">Item Collection 1</div>
        <div className="bg-[var(--menu-bg)] p-4 rounded-lg">Item Collection 2</div>
        <div className="bg-[var(--menu-bg)] p-4 rounded-lg">Item Collection 3</div>
        <div className="bg-[var(--menu-bg)] p-4 rounded-lg">Item Collection 4</div>
        <div className="bg-[var(--menu-bg)] p-4 rounded-lg">Item Collection 5</div>
        <div className="bg-[var(--menu-bg)] p-4 rounded-lg">Item Collection 6</div>
        <div className="bg-[var(--menu-bg)] p-4 rounded-lg">Item Collection 7</div>
        <div className="bg-[var(--menu-bg)] p-4 rounded-lg">Item Collection 8</div>
        <div className="bg-[var(--menu-bg)] p-4 rounded-lg">Item Collection 9</div>
        <div className="bg-[var(--menu-bg)] p-4 rounded-lg">Item Collection 10</div>
      </div>
    </div>
  );
} 