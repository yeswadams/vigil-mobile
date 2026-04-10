// import express from "@expressjs/express";

// type HealthResponse = {
//     message: string;
// };

// const server = async () => {
//     const app = express();

//     app.use(express.json());

//     app.get("/health", (req: express.Request, res: express.Response<HealthResponse>) => {
//         res.status(200).send({ message: "OK" });
//     });

//     app.listen(3001, () => {
//         console.log("Server listening on port 3001");
//     });
// };

// (async () => {
//     await server();
// })();
