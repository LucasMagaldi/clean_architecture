import { LatLng, Route } from "../../Entities/Route/route";
import { RouteRepository } from "../../Repository/RouteRepositoty";

type createRouteInput = {
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    points?: LatLng[]
};

type createRouteOutPut = {
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    points?: LatLng[]
};

type findAllOutPut = {
    title: string,
    startPosition: LatLng,
    endPosition: LatLng,
    points?: LatLng[]
}[];

export class createRoute {

    constructor(private routeRepo: RouteRepository) {

    }


    async execute(input: createRouteInput): Promise<createRouteOutPut> {
        const route = new Route(input);
        await this.routeRepo.insert(route);
        return route.toJSON();
    }
    async findAll(): Promise<findAllOutPut> {
        const routes = await this.routeRepo.findAll();
        return routes.map(route => route.toJSON());
    }
}