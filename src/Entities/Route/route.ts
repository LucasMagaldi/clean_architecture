type LatLng = { lat: number; lng: number };
export type RouteTypes = {
    title: string;
    startPosition: LatLng;
    endPosition: LatLng;
    points?: LatLng[]; //It isn't a mandatory proportie
}

export class Route {
    public props: Required<RouteTypes>;
    constructor(props: RouteTypes) {
        this.props = {
            ...props,
            points: props.points || []
        };
    }

    updateTitle(title: string) {
        this.title = title;
    }

    get title() {
        return this.props.title;
    }

    private set title(value: string) {
        this.props.title = value;
    }
}