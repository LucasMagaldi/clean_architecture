type LatLng = { lat: number; lng: number };
export type RouteTypes = {
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[]; //It isn't a mandatory proportie
}

class Route {
    public props: Required<RouteTypes>;
    constructor(props: RouteTypes) {
        this.props = {
            ...props,
            points: props.points || []
        }
    }   
}