import type { ControlPosition, IControl, Map as MapLibreMap } from 'maplibre-gl';
import { mapStyles } from '../../maps/maps';
import { OverlayType } from '../../maps/types';
import '../../themes/styles/dsfr.css';
import '../Button/Button.css';
import './MapSelectorControl.css';
/**
 * Configuration options for the MapSelectorControl
 */
export interface MapSelectorOptions {
    /** Available map styles to show in the selector (default: all styles) */
    styles?: (keyof typeof mapStyles)[];
    /** Available overlays to show in the selector (default: all overlays) */
    overlays?: OverlayType[];
}
/**
 * MapLibre control for selecting map styles and overlays
 * Provides a toggle button that opens a panel with style and overlay options
 */
export declare class MapSelectorControl implements IControl {
    private _map?;
    private _options;
    private _panel?;
    private _toggleButton?;
    private _keydownHandler?;
    private _clickHandler?;
    constructor(options?: MapSelectorOptions);
    /** Creates and initializes the control structure */
    onAdd(map: MapLibreMap): HTMLElement;
    /** Creates the main selector panel with style and overlay sections */
    private _createPanel;
    /** Creates a card element from template */
    private _createCard;
    /** Populates containers with cards based on type */
    private _populateCards;
    /** Sets up essential event handlers for AAA compliance */
    private _setupEventHandlers;
    /** Toggles panel visibility */
    private _togglePanel;
    /** Opens the panel with focus management */
    private _openPanel;
    /** Closes the panel */
    private _closePanel;
    /** Syncs panel state with current map configuration */
    private _syncPanelState;
    /** Handles style card click - changes map style */
    private _onStyleClick;
    /** Handles overlay card click - toggles overlay visibility */
    private _onOverlayClick;
    /** Cleanup when control is removed */
    onRemove(): void;
    /** Default position for the control */
    getDefaultPosition(): ControlPosition;
}
//# sourceMappingURL=MapSelectorControl.d.ts.map