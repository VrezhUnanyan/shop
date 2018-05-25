import { Component } from '@angular/core';
@Component({
    selector: 'app-navbar',
    templateUrl: './navBar.component.html'
})
export class NavbarComponent {
    isIn = false;   // store state
    toggleState() { // click handler
        const b = this.isIn;
        this.isIn = b === false ? true : false;
    }
}
