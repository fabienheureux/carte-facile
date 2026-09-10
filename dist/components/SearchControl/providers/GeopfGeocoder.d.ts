import type { SearchProvider } from '../SearchControl';
/**
 * Data exposed by GeopfGeocoder results.
 * Cast `result.data` to this type in your `onSelect` callback to access
 * the full API response and typed fields like the INSEE code.
 *
 * @example
 * import type { GeopfResultData } from 'carte-facile';
 *
 * new SearchControl({
 *   providers: [GeopfGeocoder],
 *   onSelect: (result) => {
 *     const data = result.data as GeopfResultData;
 *     // For address results: reliable 5-digit INSEE commune code (e.g. "75056")
 *     console.log(data.citycode);
 *     // For POI results: first entry from the array (e.g. "75" for Paris département)
 *     console.log(data.postcode);
 *     // Full raw properties from the API
 *     console.log(data.properties);
 *   }
 * });
 */
export interface GeopfResultData {
    /** Full raw feature properties from the API response */
    properties: Record<string, unknown>;
    /**
     * INSEE municipality code.
     * Reliable for address results (5-digit string, e.g. "75056").
     * For POI/admin results, first value from the `citycode` array — may be
     * a department code rather than the full commune code.
     */
    citycode?: string;
    /** First postal code */
    postcode?: string;
    /** City name (populated for POI results) */
    cityName?: string;
    /** Raw API categories (e.g. ["administratif", "commune"]) */
    category?: string[];
    /** Geometry polygon for contour display (when available) */
    geometry?: GeoJSON.Polygon | GeoJSON.MultiPolygon;
    /** If true, geometry is rendered as inverted mask (admin boundaries) */
    invertedMask?: boolean;
}
export declare const GeopfGeocoder: SearchProvider;
//# sourceMappingURL=GeopfGeocoder.d.ts.map