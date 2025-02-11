import { Ship } from "lucide-react";

export default function Index() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-background to-primary p-4 min-h-screen">
      <div className="flex flex-col items-center gap-15 m-auto">
        <div className="space-y-4">
          <div className="space-y-4 text-center">
            <h1 className="font-bold text-4xl tracking-tight">NAVAL BATTLE</h1>
            <Ship size={54} className="inline-block" />
            <p className="">Strategic warfare at sea</p>
          </div>
          <div className="bg-base-100 shadow-xl card">
            <div className="gap-5 text-center card-body">
              <h2 className="text-3xl text-center">Room Code</h2>
              <p>It is the code Room</p>
            </div>
          </div>
          <p className="text-center">Share this code with your opponent</p>
          <button className="btn-block bg-primary hover:bg-emerald-400/90 px-4 py-3 rounded-lg font-medium text-primary-foreground btn-lg btn">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
