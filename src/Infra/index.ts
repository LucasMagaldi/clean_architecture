import express, { Express, Request, Response } from "express";
import { createRoute } from "../Usecases/Route/RouteUseCase";
import { RouteInMemory } from "./DB/RouteInMemory";

const app: Express = express();
app.use(express.json());
const pórt = process.env.PORT || 3000;

const routeRepo = new RouteInMemory();

app.post("/routes", async (req: Request, res: Response) => {
    const createUseCase = new createRoute(routeRepo);
    const output = await createUseCase.execute(req.body);
    res.status(200).json(output);
});

app.get("/routes", async (req: Request, res: Response) => {
    const createUseCase = new createRoute(routeRepo);
    const output = await createUseCase.findAll();
    res.status(200).json(output);
})

app.listen(pórt, () => {
    console.log("RUNNING")
})