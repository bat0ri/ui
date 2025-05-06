import Example from "../components/ui/Header";

export default function Home() {

  return (
    <div className="min-w-screen min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Example />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
        <div className="w-full max-w-md p-8 rounded-lg shadow-2xl bg-gray-850 border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            batori UI
          </h2>
          <div className="mt-6 space-y-4">
            <div className="p-4 rounded-lg bg-gray-800 border border-gray-700">
              <h3 className="text-lg font-semibold text-gray-200">Добро пожаловать</h3>
              <p className="mt-2 text-gray-400">
                Темная тема с акцентами в стиле Deepseek и Obsidian
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}