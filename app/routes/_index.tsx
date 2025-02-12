import { Ship } from "lucide-react";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-background to-primary p-4 min-h-screen">
      <div className="flex flex-col items-center gap-15 m-auto">
        <div className="space-y-4 text-center">
          <h1 className="font-bold text-4xl tracking-tight">NAVAL BATTLE</h1>
          <Ship size={54} className="inline-block" />
          <p className="">Strategic warfare at sea</p>
        </div>
        <div>
          <Link to="/createGame">
            <button className="btn-block bg-primary hover:bg-emerald-400/90 px-4 py-3 rounded-lg font-medium text-primary-foreground btn-lg btn">
              Create Game
            </button>
          </Link>
          <div className="divider"></div>
          <Link to="/connexionPage">
            <button className="btn-block bg-primary hover:bg-emerald-400/90 px-4 py-3 rounded-lg font-medium text-primary-foreground btn-lg btn">
              Join Game
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
