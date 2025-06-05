import React, { useState } from 'react';
import BoardDetailModal from './BoardDetailModal';
import { useBoardStore } from '../store';

const typeToKorean = (type) => {
  switch (type) {
    case 'todo':
      return '할 일';
    case 'inprogress':
      return '진행 중';
    case 'done':
      return '완료';
    default:
      return type;
  }
};

//기존 Boards 컴포넌트에서 Data를 MockData를 Props를 받고 이용하는 형태로 구성되어 있습니다.
//이를 Zustand를 이용하여 상태관리를 하도록 변경합니다.
//data props 항목을 삭제합니다.
//데이터를 type에 따라 필터링하여 각 칸반보드에서 사용해야 합니다. type은 prop로 전달되고 있습니다.
//filteredData에 할당된 data를 필터링 하세요.
//이후 Recoil의 useRecoilValue를 이용하여 Recoil의 상태를 가져오도록 수정합니다.

const Boards = ({ type }) => {
  const { boards } = useBoardStore();
  const filteredData = boards.filter((item) => item.type === type);

  const [item, setItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = (item) => {
    setItem(item);
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setItem(null);
    setIsOpen(false);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-[60px] bg-stone-200 rounded-sm flex items-center justify-center">
        <p className="text-lg font-semibold">{typeToKorean(type)}</p>
      </div>
      <div className="flex flex-col gap-2 p-4">
        {filteredData.map((item) => (
          <div
            onClick={() => handleModalOpen(item)}
            key={item.id}
            className="bg-white hover:bg-stone-100 shadow-md rounded-md p-4 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item.type === 'todo' && <div className="animate-pulse w-2 h-2 rounded-full bg-green-500"></div>}
              {item.type === 'inprogress' && <div className="animate-pulse w-2 h-2 rounded-full bg-amber-500"></div>}
              {item.type === 'done' && <div className="animate-pulse w-2 h-2 rounded-full bg-red-500"></div>}
            </div>
            <p className="text-sm text-gray-500">{item.created_at}</p>
          </div>
        ))}
      </div>
      {isOpen && <BoardDetailModal onClose={handleModalClose} item={item} />}
    </div>
  );
};

export default Boards;
