import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input() size: number = 24;
  @Input() color: string = 'natural-light';
  icon: string = 'heroShoppingCart';

  @Input() set iconName(value: keyof typeof IconComponent.prototype.icons) {
    this.icon = this.icons[value];
  }

  icons: { [key: string]: string } = {
    cart: 'heroShoppingCart',
    like: 'heroHeartSolid',
    dislike: 'heroHeart',
    envelope: 'heroEnvelopeSolid',
  };
}
