import { Component } from '@angular/core';

import { HomeBannerModule } from "./home-banner/home-banner.module";
import { HomeFeaturesModule } from "./home-features/home-features.module";
import { HomeHotTodayModule } from "./home-hot-today/home-hot-today.module";
import { HomePromotionsModule } from "./home-promotions/home-promotions.module";
import { HomeShowcaseModule } from "./home-showcase/home-showcase.module";
import { HomeTopCategoriesModule } from "./home-top-categories/home-top-categories.module";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HomeBannerModule, HomeFeaturesModule, HomeHotTodayModule, HomePromotionsModule, HomeShowcaseModule, HomeTopCategoriesModule]
})
export class HomeComponent {

}
