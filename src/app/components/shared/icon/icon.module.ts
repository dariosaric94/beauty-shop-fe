import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { heroShoppingCart, heroHeart } from '@ng-icons/heroicons/outline';
import { heroHeartSolid, heroEnvelopeSolid } from '@ng-icons/heroicons/solid';

@NgModule({
  imports: [
    NgIconsModule.withIcons({
      heroShoppingCart,
      heroHeart,
      heroHeartSolid,
      heroEnvelopeSolid,
    }),
  ],
  exports: [NgIconsModule],
})
export class IconModule {}
