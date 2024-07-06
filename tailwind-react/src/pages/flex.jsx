import React from "react";

export default function Flex() {
  return (
    <div>
      <div className="space-y-8 bg-red-900">
        {/* <div className="w-96 h-10 bg-white shadow rounded">w-96</div>
    <div className="w-80 bg-white shadow rounded">w-80</div>
    <div className="w-72 bg-white shadow rounded">w-72</div>
    <div className="w-64 bg-white shadow rounded">w-64</div>
    <div className="w-60 bg-white shadow rounded">w-60</div>
    <div className="w-56 bg-white shadow rounded">w-56</div>
    <div className="w-52 bg-white shadow rounded">w-52</div>
    <div className="w-48 bg-white shadow rounded">w-48</div> */}
        <div className="text-gray-200">hello world</div>
        <div className="text-gray-300">hello </div>
        <div className="text-gray-500">world</div>
        <div className="text-2xl p-3"></div>
      </div>
      <div className="w-20 h-20 rounded-full bg-red-500"></div>

      <div className="bg-slate-600"></div>
      {/* flex , grid */}
      <h2 className="ml-4">1,2 그냥 보더만 준 flex</h2>
      <div className="flex border-4 border-red-300 m-3">
        <div className="p-2 border-4 border-blue-500">1 hello </div>
        <div className="p-2 border-4 border-blue-500">1 hello </div>
        <div className="p-2 border-4 border-blue-500">1 hello </div>
        <div className="p-2 border-4 border-blue-500">1 hello </div>
        <div className="p-2 border-4 border-blue-500">1 hello </div>
      </div>

      <div className="flex border-4 border-red-300 m-3">
        <div className="p-2 border-4 border-blue-500">2 hello </div>
        <div className="p-2 border-4 border-blue-500">2 hello </div>
        <div className="p-2 border-4 border-blue-500">2 hello </div>
        <div className="p-2 border-4 border-blue-500">2 hello </div>
        <div className="p-2 border-4 border-blue-500">2 hello </div>
      </div>
      <div className="m-3">3. flex-column인 상황임 </div>
      <div className="flex flex-col border-4 border-red-300 m-3">
        <div className="p-2 border-4 border-blue-500">3 hello </div>
        <div className="p-2 border-4 border-blue-500">3 hello </div>
        <div className="p-2 border-4 border-blue-500">3 hello </div>
        <div className="p-2 border-4 border-blue-500">3 hello </div>
        <div className="p-2 border-4 border-blue-500">3 hello </div>
      </div>
      <div className="ml-4">4.flex-1을 주면 요소가 동일한 크기가 됨</div>
      <div className="flex flex-wrap border-4 border-red-300 m-3">
        <div className="flex-1 p-2 border-4 border-blue-500">4 hello </div>
        <div className="flex-1 p-2 border-4 border-blue-500">4 hello </div>
        <div className="flex-1 p-2 border-4 border-blue-500">4 hello </div>
        <div className="flex-1 p-2 border-4 border-blue-500">4 hello </div>
        <div className="flex-1 p-2 border-4 border-blue-500">4 hello </div>
      </div>
      <div className="ml-3">5.이건 flex-wrap만 준거임</div>
      <div className="flex flex-wrap border-4 border-red-300 m-3">
        <div className="flex-wrap p-2 border-4 border-blue-500">5 hello </div>
        <div className="flex-wrap p-2 border-4 border-blue-500">5 hello </div>
        <div className="flex-wrap p-2 border-4 border-blue-500">5 hello </div>
        <div className="flex-wrap p-2 border-4 border-blue-500">5 hello </div>
      </div>
      <div className="ml-4">6.갭을 줘봅니다.</div>
      <div className="flex flex-wrap gap-3 border-4 border-red-300 m-3">
        <div className="flex-wrap p-2 border-4 border-blue-500">6 hello </div>
        <div className="flex-wrap p-2 border-4 border-blue-500">6 hello </div>
        <div className="flex-wrap p-2 border-4 border-blue-500">6 hello </div>
        <div className="flex-wrap p-2 border-4 border-blue-500">6 hello </div>
      </div>
      <div className="ml-4">7.갭 없이 , 요소들에게 마진만 줘봅니다.</div>
      <div className="flex flex-wrap gap-3 border-4 border-red-300 m-3">
        <div className="m-3 flex-wrap p-2 border-4 border-blue-500">
          7 hello
        </div>
        <div className="m-3 flex-wrap p-2 border-4 border-blue-500">
          7 hello
        </div>
        <div className="m-3 flex-wrap p-2 border-4 border-blue-500">
          7 hello
        </div>
        <div className="m-3 flex-wrap p-2 border-4 border-blue-500">
          7 hello
        </div>
      </div>
      <div className="m-3">8.wrap,gap,네거티브 마진을 줌 </div>
      <div className="flex flex-wrap gap-3 border-4 border-red-300 m-3">
        <div className="-m-3 flex-wrap p-2 border-4 border-blue-500">
          8 hello
        </div>
        <div className="-m-3 flex-wrap p-2 border-4 border-blue-500">
          8 hello
        </div>
        <div className="-m-3 flex-wrap p-2 border-4 border-blue-500">
          8 hello
        </div>
        <div className="-m-3 flex-wrap p-2 border-4 border-blue-500">
          8 hello
        </div>
      </div>
      <div className="m-3">9.width 퍼센트</div>
      <div className="m-3">
        두개 요소가 100프로를 먹었는데 , flex-wrap이 없어서 밑으로 개행되지 않고
        쌓임.{" "}
      </div>

      <div className="flex gap-3 border-4 border-red-300 m-3">
        <div className="w-3/4 m-3 flex-wrap p-2 border-4 border-blue-500">
          9 hello
        </div>
        <div className="w-1/4m-3 flex-wrap p-2 border-4 border-blue-500">
          9 hello
        </div>
        <div className="w-3/4 m-3 flex-wrap p-2 border-4 border-blue-500">
          9 hello
        </div>
        <div className="w-1/4m-3 flex-wrap p-2 border-4 border-blue-500">
          9 hello
        </div>
      </div>
      <div className="m-3">flex-Wrap이 없음</div>
      <div className="flex  border-4 border-red-300 m-3">
        <div className="w-3/4  flex-wrap p-2 border-4 border-blue-500">
          9 hello
        </div>
        <div className="w-1/4  flex-wrap p-2 border-4 border-blue-500">
          9 hello
        </div>
        <div className=" flex-wrap p-2 border-4 border-blue-500">9 hello</div>
        <div className=" flex-wrap p-2 border-4 border-blue-500">9 hello</div>
      </div>
      <div>flex-wrap을 넣음. 같은 width</div>
      <div className="flex flex-wrap border-4 border-red-300 m-3">
        <div className="w-1/4 flex-wrap p-4 border-4 border-blue-500">
          9 hello
        </div>
        <div className="w-1/4 flex-wrap p-4 border-4 border-blue-500">
          9 hello
        </div>
        <div className="w-1/4 flex-wrap p-4 border-4 border-blue-500">
          9 hello
        </div>
        <div className="w-1/4 flex-wrap p-4 border-4 border-blue-500">
          9 hello
        </div>
        <div className="w-1/4 flex-wrap p-4 border-4 border-blue-500">
          9 hello
        </div>
        <div className="w-1/4 flex-wrap p-4 border-4 border-blue-500">
          9 hello
        </div>
        <div className="w-1/4 flex-wrap p-4 border-4 border-blue-500">
          9 hello
        </div>
        <div className="w-1/4 flex-wrap p-4 border-4 border-blue-500">
          9 hello
        </div>
      </div>
      <div className="flex flex-col">
        <div className="m-3">12.인라인블록</div>
        <div className="m-3">
          인라인 블록은 엔터가 있으면 그것도 공백으로 침. 근데 이슬린트땜에 공백
          못없앰 ㅎ
        </div>
        <div className="flex gap-3 border-4 border-red-300 m-3">
          <div className="inline-block p-2 border-4 border-blue-500">
            12 hello
          </div>
          <div className="inline-block p-2 border-4 border-blue-500">
            12 hello
          </div>
          <div className="inline-block p-2 border-4 border-blue-500">
            12 hello
          </div>
          <div className="inline-block p-2 border-4 border-blue-500">
            12 hello
          </div>
        </div>
      </div>
      <div className="m-3">13.justify-content:space-between</div>
      <div className="flex justify-between border-4 border-red-300 m-3">
        <div className="p-2 border-4 border-blue-500">13 hello </div>
        <div className="p-2 border-4 border-blue-500">13 hello </div>
        <div className="p-2 border-4 border-blue-500">13 hello </div>
        <div className="p-2 border-4 border-blue-500">13 hello </div>
        <div className="p-2 border-4 border-blue-500">13 hello </div>
      </div>
      <div className="m-3">justify-content:center</div>
      <div className="flex justify-center border-4 border-red-300 m-3">
        <div className="p-2 border-4 border-blue-500">13 hello </div>
        <div className="p-2 border-4 border-blue-500">13 hello </div>
        <div className="p-2 border-4 border-blue-500">13 hello </div>
        <div className="p-2 border-4 border-blue-500">13 hello </div>
        <div className="p-2 border-4 border-blue-500">13 hello </div>
      </div>
      <div className="m-3">justify-content:center,align-item</div>
      <div className="m-3">leading으로 파란 박스 크기 조절 , order</div>
      <div className="flex justify-center items-center border-4 w-80 h-80 border-red-300 m-3">
        <div className="p-2 border-4 border-blue-500 leading-8 order-1">
          hello{" "}
        </div>
        <div className="p-2 border-4 border-blue-500 leading-8 order-3">
          hello{" "}
        </div>
        <div className="p-2 border-4 border-blue-500 leading-8 order-first  md:order-none">
          hello{" "}
        </div>
        <div className="p-2 border-4 border-blue-500 leading-8 order-4">
          hello{" "}
        </div>
        <div className="p-2 border-4 border-blue-500 leading-8 order-2">
          hello{" "}
        </div>
      </div>
      <div className="m-3">
        원은 div로 하나 더 감싸서 , 패딩넣으면 안찌그러짐
      </div>
      <div className="flex flex-row border-4 border-red-300 m-3">
        <div className="p-2 border-4 border-blue-500">
          <div className="flex-1 w-16 h-16 bg-blue-400 rounded-full"></div>
        </div>
        <div className="flex-1 p-2 border-4 border-blue-500">1 hello </div>
        <div className="flex-1 p-2 border-4 border-blue-500">1 hello </div>
        <div className="flex-1 p-2 border-4 border-blue-500">1 hello </div>
        <div className="flex-1 p-2 border-4 border-blue-500">1 hello </div>
      </div>
      <div className="m-3">나중에 flex-shrink에 대해서도 공부해야함</div>
    </div>
  );
}
