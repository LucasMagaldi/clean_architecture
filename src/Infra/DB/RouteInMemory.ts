import { Route } from "../../Entities/Route/route";
import { RouteRepository } from "../../Repository/RouteRepositoty";

export class RouteInMemory implements RouteRepository {
    items: Route[] = []

    async insert(route: Route): Promise<void> {
        this.items.push(route);     
    }
}