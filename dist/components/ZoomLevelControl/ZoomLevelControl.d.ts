import { Map, IControl, ControlPosition } from 'maplibre-gl';
import '../../themes/styles/dsfr.css';
import './ZoomLevelControl.css';
export declare class ZoomLevelControl implements IControl {
    private _map?;
    private _container;
    onAdd(map: Map): HTMLElement;
    onRemove(): void;
    getDefaultPosition(): ControlPosition;
}
//# sourceMappingURL=ZoomLevelControl.d.ts.map