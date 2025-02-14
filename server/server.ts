import { Server } from "socket.io";
import http from "http";

const server = http.createServer();

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`🚀 Serveur Socket.IO démarré sur http://localhost:${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Client connecté :", socket.id);

  socket.on("notification", (data) => {
    console.log("Notification reçue :", data);
    io.emit("notification", data);
  });

  socket.on("disconnect", () => {
    console.log("Client déconnecté :", socket.id);
  });
});
