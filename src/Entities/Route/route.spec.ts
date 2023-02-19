import { RouteTypes, Route } from "./route";

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

    test("Update method ", () => {
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
})