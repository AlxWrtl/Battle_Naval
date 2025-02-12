import { Link } from "@remix-run/react";
import { Ship } from "lucide-react";

export default function ConnexionPage() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-background to-primary p-4 min-h-screen">
      <div className="flex flex-col items-center gap-15 m-auto w-full">
        <div className="space-y-4 text-center">
          <h1 className="font-bold text-4xl tracking-tight">NAVAL BATTLE</h1>
          <Ship size={54} className="inline-block" />
          <p className="">Strategic warfare at sea</p>
        </div>
        <div className="space-y-4 md:w-94">
          <input
            type="text"
            placeholder="Enter room code"
            className="input-bordered w-full input input-primary"
          />
          <div className="flex gap-x-2">
            <button className="flex-1 bg-primary hover:bg-emerald-400/90 px-4 py-3 rounded-lg font-medium text-primary-foreground btn-lg btn">
              Join Game
            </button>
            <Link to="/">
              <button className="flex-1 bg-primary hover:bg-emerald-400/90 px-4 py-3 rounded-lg font-medium text-primary-foreground btn-lg btn">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
