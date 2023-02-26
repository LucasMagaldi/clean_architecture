import { EntitySchema } from "typeorm";
import { Route } from "../../../Entities/Route/route";

export const RouteSchema = new EntitySchema<Route>({
    name: 'route',
    target: Route,
    columns: {
        title: {
            type: String,
            length: 255
        },
        startPosition: {
            type: "simple-json"
        },
        endPosition: {
            type: "simple-json"
        },
        points: {
            type: "simple-json"
        },
    },
});