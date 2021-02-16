export class LeeSelectable {

    constructor(
        
        private _isSelected = false
        
    ){}

    public select       (): void      { this._isSelected = true }
    public deselect     (): void      { this._isSelected = false }
    public toggle       (): void      { this._isSelected = !this._isSelected }
    public isSelected   (): boolean   { return this._isSelected }   

}