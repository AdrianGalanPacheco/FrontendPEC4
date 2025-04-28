/* Exercise 7: Import Input, Output, EventEmitter */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../models/article';
/* Exercise 7: Import ArticleQuantityChange */
import { ArticleQuantityChange } from '../models/article-quantity-change';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
})
export class ArticleItemComponent {
  // Defines an article
  /* Exercise 7: Recieves an Article as an Input */
  @Input() article!: Article;

  /* Exercise 7: Emits an event when the quantity changes */
  @Output() quantityChange = new EventEmitter<ArticleQuantityChange>();

  changeQuantity(quantity: number) {
    this.quantityChange.emit({
      article: this.article,
      quantityChange: quantity,
    });
  }
}
