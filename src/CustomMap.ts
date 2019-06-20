export class CustomMap {
    private customMap: google.maps.Map;

    constructor(elementId: string) {
        this.customMap = new google.maps.Map(document.getElementById(elementId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.customMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({ content: mappable.markerContent() });
            infoWindow.open(this.customMap, marker);
        });
    }
}

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}
