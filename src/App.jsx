import Boards from './components/Boards';
import Controller from './components/Controller';

const MOCK_DATA = [
  {
    id: 1,
    title: '작업 목록 1',
    desc: '해야 할 작업 목록입니다. 우선순위를 정하고 진행하세요.',
    type: 'todo',
    created_at: '2023-10-01',
  },
  {
    id: 2,
    title: '작업 중 1',
    desc: '현재 진행 중인 작업입니다. 작업 상태를 주기적으로 업데이트하세요.',
    type: 'inprogress',
    created_at: '2023-10-01',
  },
  {
    id: 3,
    title: '완료 1',
    desc: '완료된 작업 목록입니다. 작업 결과를 검토하고 공유하세요.',
    type: 'done',
    created_at: '2023-10-01',
  },
  {
    id: 4,
    title: '작업 목록 2',
    desc: '새로운 작업을 추가하고 계획을 세우세요. 중요한 작업부터 시작하세요.',
    type: 'todo',
    created_at: '2023-10-02',
  },
  {
    id: 5,
    title: '작업 중 2',
    desc: '진행 중인 작업의 세부 사항을 확인하고 필요한 자원을 확보하세요.',
    type: 'inprogress',
    created_at: '2023-10-02',
  },
  {
    id: 6,
    title: '완료 2',
    desc: '모든 작업이 성공적으로 완료되었습니다. 팀과 함께 성과를 축하하세요.',
    type: 'done',
    created_at: '2023-10-02',
  },
];

// 기존 Boards 컴포넌트에서 Data를 MockData를 Props를 받고 이용하는 형태로 구성되어 있습니다.
// 이를 Zustand을 이용하여 상태관리를 하도록 변경합니다.

function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="w-full h-[80px] bg-slate-800 flex flex-col items-center justify-center text-stone-100">
        <p className="text-lg font-semibold">Kanban Board Project</p>
      </header>
      <main className="flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-3 gap-4 p-4 w-full">
          <Boards type={'todo'} data={MOCK_DATA} />
          <Boards type={'inprogress'} data={MOCK_DATA} />
          <Boards type={'done'} data={MOCK_DATA} />
        </div>
        <Controller />
      </main>
      <footer className="w-full h-[60px] bg-slate-800 flex items-center text-stone-100 justify-center">
        <p>&copy; Dev-KMS</p>
      </footer>
    </div>
  );
}

export default App;
