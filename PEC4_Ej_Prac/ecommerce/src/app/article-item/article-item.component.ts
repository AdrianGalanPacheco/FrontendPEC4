import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
/* Exercise 5: Import NgClass and NgIf */
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-article-item',
  standalone: true,
  /* Exercise 5: Import NgClass and NgIf */
  imports: [NgClass, NgIf],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
})

export class ArticleItemComponent implements OnInit {
  // Defines an article
  public article!: Article;

  constructor() {}

  // Initializes the article with default values
  ngOnInit() {
    this.article = {
      name: 'Camiseta',
      imageUrl:
        'https://img.freepik.com/psd-premium/t-shirt-negro-filmado-estudio-sobre-fondo-blanco_1153121-10726.jpg',
      price: 9.99,
      isOnSale: true,
      quantityInCart: 0,
    };
  }

  // Increments quantity
  incrementQuantity() {
    this.article.quantityInCart++;
  }

  // Decrements quantity
  decrementQuantity() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}
