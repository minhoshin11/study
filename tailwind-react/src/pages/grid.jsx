export default function Grid() {
  return (
    <div>
      {/* grid는 보통 column만 주는 경우가 많음. */}
      <div className="grid grid-cols-3 gap-2 border-4 border-red-400">
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
      </div>
      <div className="mt-4">반응형 그리드(칼럼)</div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-4 border-red-400">
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
      </div>

      <div className="mt-4">col-span-2 (칼럼 두개 통합)</div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-4 border-red-400">
        <div className="col-span-3 border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
        <div className="border-4 border-blue-500">hello</div>
      </div>

      <div className="mt-4">그냥 내가 하고 싶은 예제</div>
      <div className="mb-2">order first 하면 위로 올릴 수 있음</div>
      <div className="border-8 border-blue-800 gap-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
        <div className="border-red-300 border-4">예제</div>
        <div className="border-red-300 border-4">예제</div>
        <div className="border-red-300 border-4 order-first">예제 오더</div>
        <div className="border-red-300 border-4">예제</div>
        <div className="border-red-300 border-4">예제</div>
      </div>
    </div>
  );
}
