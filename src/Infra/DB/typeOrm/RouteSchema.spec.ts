import { DataSource } from "typeorm";
import { Route } from "../../../Entities/Route/route";
import { RouteSchema } from "./RouteSchema";

describe("RouteSchema Test", () => {
    test("create", async () => {
        const dataSource = new DataSource({
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            logging: true,
            entities: [RouteSchema]
        });
        await dataSource.initialize();
        const route = new Route({
            title: "Testing DB connection",
            startPosition: { lat: 1, lng: 6 },
            endPosition: { lat: 3, lng: 31 },
            points: [{ lat: 3, lng: 31 }]
        });
        const routeRepo = dataSource.getRepository(Route);
        await routeRepo.save(route);
    });
});