import { OverlayType, MapOverlays, LayerGroupType } from './types';
import type { Map as MapLibreMap, StyleSpecification } from 'maplibre-gl';
/**
 * Map styles configuration
 * Each style is a complete MapLibre style configuration
 */
export declare const mapStyles: {
    simple: StyleSpecification;
    simpleOsm: StyleSpecification;
    aerial: StyleSpecification;
    desaturated: StyleSpecification;
};
/**
 * @deprecated Use mapStyles instead. This will be removed in the next major version.
 */
export declare const mapStyle: {
    simple: StyleSpecification;
    simpleOsm: StyleSpecification;
    aerial: StyleSpecification;
    desaturated: StyleSpecification;
};
/**
 * Map thumbnails configuration
 * Used for style selection UI
 */
export declare const mapThumbnails: {
    readonly simple: string;
    readonly simpleOsm: string;
    readonly aerial: string;
    readonly desaturated: string;
    readonly cadastre: string;
    readonly administrativeBoundaries: string;
    readonly levelCurves: string;
};
/**
 * Map overlays configuration
 * Each overlay has two variants:
 * - neutral: for standard map styles (simple, desaturated)
 * - color: for aerial map style
 */
export declare const mapOverlays: MapOverlays;
/**
 * Adds one or more overlays to the map
 * @param map - The MapLibre map instance
 * @param type - The type of overlay(s) to add (cadastre, administrative-boundaries, or level-curves)
 */
export declare function addOverlay(map: MapLibreMap, type: OverlayType | OverlayType[]): void;
/**
 * Removes one or more overlays from the map
 * @param map - The MapLibre map instance
 * @param type - The type of overlay(s) to remove (cadastre, administrative-boundaries, or level-curves)
 */
export declare function removeOverlay(map: MapLibreMap, type: OverlayType | OverlayType[]): void;
/**
 * Show the specified layer groups
 * @param map - The MapLibre map instance
 * @param groups - List of layer groups to show
 */
export declare function showLayer(map: MapLibreMap, groups: LayerGroupType | LayerGroupType[]): void;
/**
 * Hide the specified layer groups
 * @param map - The MapLibre map instance
 * @param groups - List of layer groups to hide
 */
export declare function hideLayer(map: MapLibreMap, groups: LayerGroupType | LayerGroupType[]): void;
//# sourceMappingURL=maps.d.ts.map