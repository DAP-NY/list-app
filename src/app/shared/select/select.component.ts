import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'custom-select',
    templateUrl: 'select.component.html',
    styleUrls: [ 'select.component.scss' ]
})
export class SelectComponent implements OnChanges {
    @Input() public items: SelectItem[];
    @Input() public formCtrl: FormControl;
    @Input() public name: string;
    @Input() public label: string;
    @Input() public disable: boolean = false;
    @Input() public value: string = '';
    @Input() public hideLabel: boolean = false;
    @Input() public emptyDisplay: boolean = false;
    @Input() public display: string;
    @Input() public useDynamicWidth: boolean = false;
    @Input() public multiple: boolean = false;
    public panelClass = '';
    public all: SelectItem = {
        display: 'All',
        value: 'All'
    };

    public checkLength(value: string): boolean {
        return value.length > 31 ? false : true;
    }

    public ngOnChanges(): void {
        /* For single select in criteria component which uses arrays */
        if (!this.multiple && Array.isArray(this.formCtrl.value) && this.formCtrl.value.length > 0) {
            this.formCtrl.setValue(this.formCtrl.value[0]);
        }
        if (this.multiple && this.items && this.allDoesnotExists()) {
            this.items = [ ...[ this.all ], ...this.items ];
        }
        this.panelClass = this.multiple ? 'multi-select': 'single-select';
    }

    public allDoesnotExists(): boolean {
        return !this.items.filter(item => item.value === 'All').length ? true : false;
    }
}
