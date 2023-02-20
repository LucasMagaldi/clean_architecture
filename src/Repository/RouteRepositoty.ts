import { Route } from "../Entities/Route/route";

export interface RouteRepository {
    insert(rotue:Route): Promise<void>
    findAll(): Promise<Route[]>
}