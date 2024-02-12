import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderModule } from "./modules/header/header.module";
import { HeaderPromotionModule } from "./modules/header-promotion/header-promotion.module";
import { FooterModule } from "./modules/footer/footer.module";
import { HeaderMobileModule } from "./modules/header-mobile/header-mobile.module";
import { NewletterModule } from "./modules/newletter/newletter.module";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderModule, HeaderPromotionModule, FooterModule, HeaderMobileModule, NewletterModule]
})
export class AppComponent {
  title = 'final';
}
