import { CounterCard } from "./_components/CounterCard";

export default function Page() {
  return (
    <main className="bg-offWhite min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-black text-2xl font-bold mb-4">文字数カウント</h1>
        <CounterCard />
      </div>
    </main>
  );
}
