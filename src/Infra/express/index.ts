import express, { Express, Request, Response } from "express";
import fileUpload, { UploadedFile } from "express-fileupload";
import path from "path";
import { createRoute } from "../../Usecases/Route/RouteUseCase";
import { RouteInMemory } from ".././DB/RouteInMemory";

const app: Express = express();

app.use(express.json());
const pórt = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: path.join(__dirname, 'tmp'),
    createParentPath: true,
    limits: { fileSize: 2 * 1024 * 1024 },
}));

const routeRepo = new RouteInMemory();

app.get("/", async(req: Request, res: Response) => {
    res.render("index");
});

app.post("/routes", async (req: Request, res: Response) => {
    const createUseCase = new createRoute(routeRepo);
    const output = await createUseCase.execute(req.body);
    res.status(200).json(output);
});

app.post("/single", async (req: Request, res: Response) => {
    try {
        const file = req.files?.mFile as UploadedFile;
        console.log(file);
        const fileName = file.name;
        const folderDestination = String.raw`C:\Users\lucas\OneDrive`;
        console.log(folderDestination)
        const savePath = path.join(folderDestination, fileName);   
        await file.mv(savePath);
        //res.status(200).json({ok: {file?.mFile}})
    } catch (err) {
        console.log(err);
    }
    
})

app.get("/routes", async (req: Request, res: Response) => {
    const createUseCase = new createRoute(routeRepo);
    const output = await createUseCase.findAll();
    res.status(200).json(output);
})

app.listen(pórt, () => {
    console.log("RUNNING")
})