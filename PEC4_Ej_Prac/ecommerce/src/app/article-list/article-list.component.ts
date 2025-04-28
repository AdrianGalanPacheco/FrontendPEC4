import { Component } from '@angular/core';
import { Article } from '../models/article';
import { ArticleQuantityChange } from '../models/article-quantity-change';

@Component({
  selector: 'app-article-list',
  template: `
    <h1>Lista de artículos</h1>
    <div class="articles" *ngFor="let article of articles">
      <app-article-item
        [article]="article"
        (quantityChange)="onQuantityChange($event)"
      ></app-article-item>
    </div>
  `,
  styles: [
    `
      h1 {
        text-align: center;
      }

      .articles {
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class ArticleListComponent {
  articles: Article[] = [
    {
      id: 1,
      name: 'Chaqueta',
      imageUrl:
        'https://w7.pngwing.com/pngs/659/426/png-transparent-jacket-duffel-coat-hood-blue-jacket.png',
      price: 109.99,
      isOnSale: true,
      quantityInCart: 0,
    },
    {
      id: 2,
      name: 'Camiseta',
      imageUrl:
        'https://img.freepik.com/psd-premium/t-shirt-negro-filmado-estudio-sobre-fondo-blanco_1153121-10726.jpg',
      price: 9.99,
      isOnSale: true,
      quantityInCart: 0,
    },
    {
      id: 3,
      name: 'Pantalones',
      imageUrl:
        'https://static.vecteezy.com/system/resources/thumbnails/044/812/684/small_2x/a-one-classic-blue-jeans-isolated-on-transparent-background-png.png',
      price: 29.99,
      isOnSale: false,
      quantityInCart: 0,
    },
  ];

  onQuantityChange(quantityChange: ArticleQuantityChange) {
    const idx = this.articles.findIndex(
      (article) => article.id === quantityChange.article.id
    );
    if (idx !== -1) {
      this.articles[idx].quantityInCart =
        this.articles[idx].quantityInCart + quantityChange.quantityChange;
    }
  }
}
