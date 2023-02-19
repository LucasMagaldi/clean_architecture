export type LatLng = { lat: number; lng: number };
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
    updatePosition(startPosition: LatLng, endPosition: LatLng) {
        this.updateStartPosition = startPosition;
        this.updateEndPosition = endPosition;
    }
    updatePoints(points: LatLng[]) {
        this.updatePointsValue = points;
    }
    toJSON(): RouteTypes {
        return this.props;
    }
    createRoute(points: LatLng[]) {
        let message: string;

        if(points.length < 2)  {
            message = "Add a valid destination";
            return message;
        }
        if(points.length > 4) {
            message = "Your trip exceeded stop limit";
            return message;
        }

        this.updatePointsValue = points;
        return this.points;
    }

    get title() {
        return this.props.title;
    }
    private set title(value: string) {
        this.props.title = value;
    }
    get startPosition() {
        return this.props.startPosition;
    }
    private set updateStartPosition(value: LatLng) {
        this.props.startPosition = value;
    }
    get endPosition() {
        return this.props.endPosition;
    }
    private set updateEndPosition(value: LatLng) {
        this.props.endPosition = value;
    }
    get points() {
        return this.props.points;
    }
    private set updatePointsValue(value: LatLng[]) {
        this.props.points = value;
    }
}