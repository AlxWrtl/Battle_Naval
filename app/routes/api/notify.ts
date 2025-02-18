import { Server } from "socket.io";
import http from "http";

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Permet uniquement ton client
    methods: ["GET", "POST"], // Autorise ces méthodes HTTP
  },
});

io.on("connection", (socket) => {
  console.log("Client connecté :", socket.id);

  socket.on("notification", (data) => {
    console.log("Notification reçue :", data);
    io.emit("notification", data); // Broadcast à tous les clients connectés
  });
});

server.listen(4000, () => {
  console.log("Serveur Socket.IO démarré sur http://localhost:4000");
});
