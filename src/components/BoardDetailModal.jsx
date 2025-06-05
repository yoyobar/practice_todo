import { useBoardStore } from '../store';
import { useState } from 'react';
import ControllerEditModal from './ControllerEditModal';

const BoardDetailModal = ({ item, onClose }) => {
  const { removeBoard } = useBoardStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    removeBoard(item.id);
    onClose();
  };
  const handleEdit = () => {
    setIsOpen(true);
  };

  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-50 z-50">
      <div onClick={(e) => e.stopPropagation()} className="bg-white rounded-lg shadow-lg p-6 w-[600px]">
        <h2 className="text-xl font-semibold mb-4 whitespace-break-spaces">{item.title}</h2>
        <p>{item.desc}</p>
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="cursor-pointer mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            닫기
          </button>
          <button
            onClick={handleEdit}
            className="cursor-pointer mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            수정
          </button>
          <button
            onClick={handleDelete}
            className="cursor-pointer mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            삭제
          </button>
        </div>
      </div>
      {isOpen && <ControllerEditModal item={item} parentClose={onClose} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default BoardDetailModal;
