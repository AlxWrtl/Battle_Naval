import { Ship } from "lucide-react";

export default function Index() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-background to-primary p-4 min-h-screen">
      <div className="flex flex-col items-center gap-15 m-auto">
        <div className="space-y-4 text-center">
          <h1 className="font-bold text-4xl tracking-tight">NAVAL BATTLE</h1>
          <Ship size={54} className="inline-block" />
          <p className="decoration-solid underline">Strategic warfare at sea</p>
        </div>
        <div className="space-y-4">
          <button className="bg-primary hover:bg-emerald-400/90 px-4 py-3 rounded-lg w-full font-medium text-primary-foreground">
            Create Game
          </button>
          <button className="bg-primary hover:bg-emerald-400/90 px-4 py-3 rounded-lg w-full font-medium text-primary-foreground">
            Join Game
          </button>
        </div>
      </div>
    </div>
  );
}
