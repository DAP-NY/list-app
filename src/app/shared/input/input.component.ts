import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'custom-input',
    templateUrl: 'input.component.html',
    styleUrls: [ 'input.component.scss' ]
})

export class InputComponent {
    @Input() public control: FormControl;
    @Input() public value: string;
    @Input() public label: string;
    @Input() public controlMessageClass: string;
    @Input() public name: string;
    @Input() public type: string = 'text';
    @Input() public placeholder: string;
    @Input() public inputIcon: string;
    @Input() public hideLabel: boolean = false;
    @Input() public maxlength: number;
    @Input() public allowDecimal: boolean = false;
    @Input() public allowNumber: boolean = false;
    @Input() public pattern: RegExp;
    @ViewChild('input')
    public inputElement: ElementRef;
    @Input() public maxLimit: number;
    @Input() public forceClearText: boolean = true;
    public preValidationValue: string ;
    public previousValue: number;
    public inputValue_Type: string;
    constructor() {
    }


    public clearInput() {
        if (this.inputElement) {
            this.inputElement.nativeElement.value = '';
            this.control.setValue('');
        } else {
            // do nothing
        }
    }
}
