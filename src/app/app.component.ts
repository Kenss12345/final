import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderModule } from "./modules/header/header.module";
import { HeaderPromotionModule } from "./modules/header-promotion/header-promotion.module";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderModule, HeaderPromotionModule]
})
export class AppComponent {
  title = 'final';
}
