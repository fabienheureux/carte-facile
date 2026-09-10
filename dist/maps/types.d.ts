import type { SourceSpecification, LayerSpecification } from 'maplibre-gl';
/**
 * Layer configuration following Mapbox/Maplibre specification
 */
export interface LayerConfig {
    id: string;
    type: string;
    metadata?: {
        'cartefacile:group'?: string;
        [key: string]: unknown;
    };
    layout?: {
        visibility?: string;
        [key: string]: unknown;
    };
    [key: string]: unknown;
}
/**
 * Overlay configuration types
 * Used for overlay management
 */
export declare const Overlay: {
    readonly cadastre: "cadastre";
    readonly administrativeBoundaries: "administrativeBoundaries";
    readonly levelCurves: "levelCurves";
};
export type OverlayType = typeof Overlay[keyof typeof Overlay];
export type OverlayVariant = 'neutral' | 'color';
export interface OverlayConfig {
    sources: Record<string, SourceSpecification>;
    metadata?: Record<string, unknown>;
    layers: LayerSpecification[];
}
export type MapOverlays = {
    [key in OverlayType]: {
        [variant in OverlayVariant]: OverlayConfig;
    };
};
/**
 * List of layer groups available
 * Used for layer visibility management
 */
export declare const LayerGroup: {
    readonly cadastral_sections: "cadastral_sections";
    readonly cadastral_parcels: "cadastral_parcels";
    readonly boundaries_communes: "boundaries_communes";
    readonly boundaries_epcis: "boundaries_epcis";
    readonly boundaries_departments: "boundaries_departments";
    readonly boundaries_regions: "boundaries_regions";
    readonly boundaries: "boundaries";
    readonly buildings: "buildings";
    readonly streets: "streets";
    readonly street_labels: "street_labels";
};
export type LayerGroupType = typeof LayerGroup[keyof typeof LayerGroup];
//# sourceMappingURL=types.d.ts.map