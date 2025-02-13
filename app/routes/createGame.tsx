import { Link, useLoaderData } from "@remix-run/react";
import { Check, Copy, Ship } from "lucide-react";
import { useState } from "react";
import { db } from "~/db.server";

function generateCode() {
  return Math.random().toString(36).substring(2, 6).toUpperCase();
}

export async function loader() {
  const room = await db.room.create({
    data: {
      codeRoom: `${generateCode()}-${generateCode()}-${generateCode()}`,
    },
  });
  return Response.json({ room });
}

export default function CreateGame() {
  const { room } = useLoaderData<typeof loader>();

  const [copycode, setCopyCode] = useState(false);

  const copyRoomCode = () => {
    navigator.clipboard.writeText(room.codeRoom);
    setCopyCode(true);
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-background to-primary p-4 min-h-screen">
      <div className="flex flex-col items-center gap-15 m-auto">
        <div className="space-y-4">
          <div className="space-y-4 text-center">
            <h1 className="font-bold text-4xl tracking-tight">NAVAL BATTLE</h1>
            <Ship size={54} className="inline-block" />
            <p className="">Strategic warfare at sea</p>
          </div>
          <div className="bg-base-100 shadow-xl md:w-94 card">
            <button className="top-0 right-0 absolute m-1 btn-sm btn btn-ghost">
              {copycode ? (
                <Check size={16} color="green" />
              ) : (
                <Copy size={16} onClick={copyRoomCode} />
              )}
            </button>
            <div className="gap-5 text-center card-body">
              <h2 className="font-bold text-3xl">Room Code</h2>
              <p className="inline-block bg-clip-text bg-gradient-to-r from-pink-300 to-primary font-semibold text-md text-transparent">
                {room.codeRoom}
              </p>
            </div>
          </div>
          <p className="text-center">Share this code with your opponent</p>
          <Link to="/">
            <button className="btn-block bg-primary hover:bg-emerald-400/90 px-4 py-3 rounded-lg font-medium text-primary-foreground btn-lg btn">
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
