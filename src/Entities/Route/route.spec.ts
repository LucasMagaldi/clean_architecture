import { RouteTypes, Route, LatLng } from "./route";

describe('Route Tests', () => {
    test('constructor', () => {
        let routeProps: RouteTypes = {
            title: "my route",
            startPosition: {lat: 0, lng: 2},
            endPosition: {lat: 4, lng: 3}
        };
        let route = new Route(routeProps);
        expect(route.props).toStrictEqual({
            ...routeProps, points: []
        });

        routeProps = {
            title: "my route",
            startPosition: {lat: 0, lng: 2},
            endPosition: {lat: 4, lng: 3},
            points: [
                {lat: 15, lng: -3},
                {lat: 67, lng: 21}
            ]
        }
        route = new Route(routeProps);
        expect(route.props).toStrictEqual({
            ...routeProps, points: [
                {lat: 15, lng: -3},
                {lat: 67, lng: 21}
            ]
        });
    });

    test("Update Title method ", () => {
        const routeProps = {
            title: "my route",
            startPosition: {lat: 0, lng: 2},
            endPosition: {lat: 4, lng: 3},
            points: [
                {lat: 15, lng: -3},
                {lat: 67, lng: 21}
            ]
        }

        const route = new Route(routeProps);
        route.updateTitle("Updating");
        expect(route.title).toBe('Updating')
    });

    test("Update position method", () => {
        const routeProps = {
            title: "my route",
            startPosition: {lat: 0, lng: 2},
            endPosition: {lat: 4, lng: 3},
        }

        const route = new Route(routeProps);
        const startPosition: LatLng = {lat: 10, lng: 12};
        const endPosition: LatLng = {lat: 15, lng: 11};
        route.updatePosition(startPosition, endPosition);
        expect(route.startPosition).toBe(startPosition);
        expect(route.endPosition).toBe(endPosition);
    });

    test("Update points method", () => {
        const routeProps = {
            title: "my route",
            startPosition: {lat: 0, lng: 2},
            endPosition: {lat: 4, lng: 3},
            points: [
                {lat: 15, lng: -3},
                {lat: 67, lng: 21}
            ]
        }

        const route = new Route(routeProps);
        const points: LatLng [] = [{lat: 10, lng: 12},{lat: 15, lng: 11}];
        route.updatePoints(points);
        expect(route.points).toHaveLength(2)
        expect(route.points).toBe(points);
    });

    test("Create Route", () => {
        const routeProps = {
            title: "my route",
            startPosition: {lat: 0, lng: 2},
            endPosition: {lat: 4, lng: 3}
        }

        const route = new Route(routeProps);
        const points: LatLng [] = [
            {lat: 10, lng: 12},
            {lat: 15, lng: 11},
            {lat: 15, lng: -3},
            {lat: 67, lng: 21},
            {lat: -8, lng: -3},
        ];
        const routes = route.createRoute(points)
        expect(routes).toBe(points)
        //expect(route.points).toBe(points);
    });
});