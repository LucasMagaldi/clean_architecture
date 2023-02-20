import { Route, RouteTypes } from "../../Entities/Route/route";
import { RouteInMemory } from "./RouteInMemory";

describe("RouteinMemory test", () => {
    it("Insert a new route", async () => {
        const repository = new RouteInMemory();
        const routeProps: RouteTypes = {
            title: "Home",
            startPosition: {lat: 0, lng: 2},
            endPosition: {lat: 4, lng: 3}
        };

        const route = new Route(routeProps);
        await repository.insert(route);
        expect(repository.items).toHaveLength(2);
        expect(repository.items).toStrictEqual([route]);
    });
});