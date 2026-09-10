import type { Map, IControl, ControlPosition } from 'maplibre-gl';
import '../../themes/styles/dsfr.css';
import '../Button/Button.css';
import './SearchControl.css';
/**
 * Search result returned by a provider
 */
export interface SearchResult {
    id: string;
    label: string;
    description?: string;
    /** Result type key set by the provider (e.g. 'address', 'city', 'train', 'poi'). */
    type?: string;
    /** Icon to display in the results list (e.g. 'pin'). Set by the provider. */
    icon?: 'pin';
    /** Location context displayed in gray after the label (city, postcode, etc.) */
    locationSuffix?: string;
    /** Coordinates [longitude, latitude] */
    center?: [number, number];
    /** Bounding box [west, south, east, north] */
    bbox?: [number, number, number, number];
    /** Additional data (geometry, properties, etc.) */
    data?: unknown;
}
/**
 * Interface to implement a custom search provider
 */
export interface SearchProvider {
    name: string;
    placeholder?: string;
    search(query: string): Promise<SearchResult[]>;
    /** Action executed when a result is selected (move map, add marker, etc.) */
    onSelect(result: SearchResult, map: Map): void | Promise<void>;
    /** Called when the search is cleared or the control is removed. Use to clean up map layers, markers, etc. */
    onClear?(map: Map): void;
}
/**
 * SearchControl configuration options
 */
export interface SearchControlOptions {
    providers?: SearchProvider | SearchProvider[];
    placeholder?: string;
    /** Delay before triggering search (default: 300ms) */
    debounceMs?: number;
    /** Minimum characters required (default: 3) */
    minChars?: number;
    /** Maximum results displayed per provider (default: 5) */
    maxResults?: number;
    /**
     * Called when the user selects a result.
     * Use this to access the full result data (INSEE code, raw API properties, etc.)
     *
     * @example
     * import type { GeopfResultData } from 'carte-facile';
     * onSelect: (result) => {
     *   const data = result.data as GeopfResultData;
     *   myService.fetchDataForCommune({ citycode: data.citycode });
     * }
     */
    onSelect?: (result: SearchResult) => void;
}
/**
 * Search control for MapLibre GL
 *
 * @example
 * map.addControl(new SearchControl({
 *     providers: [GeopfGeocoder, AdminGeocoder]
 * }));
 */
export declare class SearchControl implements IControl {
    private static _idCounter;
    private _id;
    private _map?;
    private _container;
    private _input;
    private _searchButton;
    private _clearButton;
    private _dropdown;
    private _providers;
    private _options;
    private _debounceTimeout?;
    private _dropdownEntries;
    private _selectedIndex;
    private _documentClickHandler?;
    private _requestId;
    private _confirmedEntry?;
    constructor(options?: SearchControlOptions);
    onAdd(map: Map): HTMLElement;
    onRemove(): void;
    getDefaultPosition(): ControlPosition;
    private _bindInputEvents;
    private _bindButtonEvents;
    private _bindDocumentEvents;
    private _search;
    private _renderDropdown;
    private _createResultItem;
    private _positionDropdown;
    private _confirmSelection;
    private _selectEntry;
    private _applyEntry;
    private _setSelectedIndex;
    /** Returns HTML with matching query words wrapped in <strong>. XSS-safe. */
    private _highlightText;
    private _hideDropdown;
}
//# sourceMappingURL=SearchControl.d.ts.map