import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <div>
        <h2>{{title}}</h2>
        <p>is a good boy.</p>
    </div> 
    `
})

export class HeaderComponent{
    title:string = "Shahjada";
}
