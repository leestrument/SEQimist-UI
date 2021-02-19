import { LeeSelectable } from './LeeSelectable'

export class LeeTabs {

    constructor(

        private _tabs: any[],
        private _lastSelectedTabIndex = 0,
        private _multipleTabsAreSelected = false,

    ){}

    public AddTab(tab: any): void {

        this._tabs.push(tab)
        const lastTabIndex = this._tabs.length - 1

        this.unselectOtherTabs(lastTabIndex)
        this.updateMultipleTabsAreSelected()
        this._lastSelectedTabIndex = lastTabIndex

    }
    public selectSingleTab(tabIndex: number) {

        this._tabs[tabIndex].select()

        this.unselectOtherTabs(tabIndex)
        this.updateMultipleTabsAreSelected()
        this._lastSelectedTabIndex = tabIndex

    }
    public selectAnotherTab(tabIndex: number): void {

        if (this._multipleTabsAreSelected) this._tabs[tabIndex].toggle()
        else this._tabs[tabIndex].select()

        this.updateMultipleTabsAreSelected()
        this._lastSelectedTabIndex = tabIndex

    }
    public selectMultipleTabsByRange(tabIndex: number): void {

        const startIndex    = Math.min(this._lastSelectedTabIndex, tabIndex)
        const endIndex      = Math.max(this._lastSelectedTabIndex, tabIndex)

        this._tabs.forEach((tab, tabIndex) => {

            if (tabIndex >= startIndex && tabIndex <= endIndex) tab.select()
            else tab.deselect()

        })

        this.updateMultipleTabsAreSelected()

    }
    public selectAllTabs(): void { 
        
        this._tabs.forEach(tab => tab.select()) 

        this.updateMultipleTabsAreSelected()
    
    }
    public removeSelectedTabs(): void {

        // store first selected tab index before removing tabs.
        const firstTabIndex = this.getSelectedTabIndexFromBegin()

        // remove selected tabs.
        let i = this._tabs.length 

        while (i--) {

            if (this._tabs[i].isSelected()) this._tabs.splice(i, 1)

        }

        // select other tab after removing prev selected tabs.
        const len = this._tabs.length
        
        if (len > 0) {

            let tabIndex = firstTabIndex

            if (firstTabIndex === len) tabIndex = firstTabIndex - 1
            
            this._tabs[tabIndex].select()
            this._lastSelectedTabIndex = tabIndex

        }

        this.updateMultipleTabsAreSelected()

    }
    public getTabs(): any[] { 
        
        return this._tabs 
    
    }
    public getLastSelectedTab(): any {

        return this._tabs[this._lastSelectedTabIndex]

    }
    public multipleTabsAreSelected(): boolean {

        return this._multipleTabsAreSelected

    }

    
    private unselectOtherTabs(tabIndexToExclude: number): void {

        this._tabs.forEach((tab, tabIndex) => { 
            
            if (tabIndex !== tabIndexToExclude) tab.deselect() 
        
        }) 

    }
    private updateMultipleTabsAreSelected(): void { 
        
        let counter = 0 

        this._tabs.forEach(tab => { 
            
            if (tab.isSelected()) counter++ 
        
        })

        this._multipleTabsAreSelected = counter > 1  
    
    }
    private getSelectedTabIndexFromBegin(): number {

        let tabIndex = 0

        this._tabs.some((tab, index) => {

            if (tab.isSelected()) tabIndex = index

            return tab.isSelected()

        })

        return tabIndex

    }

}