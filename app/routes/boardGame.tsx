import { useEffect, useState } from "react";
import { useWebSocket } from "~/hooks/useWebSocket";
import { db } from "~/db.server";


export default function BoardGamme() {
  const [playersConnected, setPlayersConnected] = useState(false);
  const { socket, isConnected } = useWebSocket();

  useEffect(() => {
    console.log("isConnected:", isConnected);
  }, [isConnected]);

  useEffect(() => {
    if (socket) {
      socket.on("playerConnected", ({ connected }) => {
        setPlayersConnected(connected);
      });

      return () => {
        socket.off("playUnconnected");
      };
    }
  }, [ socket ]);


  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex flex-row justify-center items-center bg-gradient-to-b from-background to-primary p-4 min-h-screen">
      <div className="flex flex-col items-center basis-1/3">
        <div className="bg-base-100 shadow-xl p-4 rounded-lg w-40 text-center">
          <h2 className="font-bold text-lg">Player 1</h2>
          <p className="text-gray-500">Status: Waiting...</p>
        </div>
        <div className="flex flex-col gap-y-2 m-3">
          <div className="flex flex-row items-center gap-x-2">
            <div className="flex justify-center items-center bg-green-300 w-10 h-10"></div>
            <p>small</p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <div className="flex justify-center items-center bg-fuchsia-300 w-10 h-10"></div>
              <div className="flex justify-center items-center bg-fuchsia-300 w-10 h-10"></div>
              <p>medium</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex justify-center items-center bg-amber-100 w-10 h-10"></div>
            <div className="flex justify-center items-center bg-amber-100 w-10 h-10"></div>
            <div className="flex justify-center items-center bg-amber-100 w-10 h-10"></div>
          </div>
          <div className="flex flex-row">
            <div className="flex justify-center items-center bg-red-400 w-10 h-10"></div>
            <div className="flex justify-center items-center bg-red-400 w-10 h-10"></div>
            <div className="flex justify-center items-center bg-red-400 w-10 h-10"></div>
            <div className="flex justify-center items-center bg-red-400 w-10 h-10"></div>
          </div>
        </div>
      </div>

      <div className="flex justify-center basis-1/3">
        <div className="grid grid-cols-11">
          <div className="w-10 h-10"></div>
          {columns.map((col) => (
            <div
              key={col}
              className="flex justify-center items-center bg-gray-300 border border-gray-400 w-10 h-10 font-bold"
            >
              {col}
            </div>
          ))}
          {rows.map((row, rowIndex) => (
            <>
              <div className="flex justify-center items-center bg-gray-300 border border-gray-400 w-10 h-10 font-bold">
                {row}
              </div>
              {columns.map((colIndex) => (
                <div
                  key={colIndex}
                  className="flex justify-center items-center bg-blue-200 hover:bg-blue-300 border border-gray-400 w-10 h-10"
                ></div>
              ))}
            </>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center basis-1/3">
        <div className="bg-base-100 shadow-xl p-4 rounded-lg w-40 text-center">
          <h2 className="font-bold text-lg">Player 2</h2>
          <p className="text-gray-500">Status: Waiting...</p>
        </div>
        <div className="flex flex-col items-end gap-y-2 m-3">
          <div className="flex justify-center items-center bg-green-300 w-10 h-10"></div>

          <div className="flex flex-row">
            <div className="flex justify-center items-center bg-fuchsia-300 w-10 h-10"></div>
            <div className="flex justify-center items-center bg-fuchsia-300 w-10 h-10"></div>
          </div>
          <div className="flex flex-row">
            <div className="flex justify-center items-center bg-amber-100 w-10 h-10"></div>
            <div className="flex justify-center items-center bg-amber-100 w-10 h-10"></div>
            <div className="flex justify-center items-center bg-amber-100 w-10 h-10"></div>
          </div>
          <div className="flex flex-row">
            <div className="flex justify-center items-center bg-red-400 w-10 h-10"></div>
            <div className="flex justify-center items-center bg-red-400 w-10 h-10"></div>
            <div className="flex justify-center items-center bg-red-400 w-10 h-10"></div>
            <div className="flex justify-center items-center bg-red-400 w-10 h-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
