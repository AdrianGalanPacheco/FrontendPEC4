/* Exercise 7: Import Input, Output, EventEmitter, ChangeDetectionStrategy */
import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Article } from '../models/article';
/* Exercise 7: Import ArticleQuantityChange */
import { ArticleQuantityChange } from '../models/article-quantity-change';
/* Exercise 5: Import NgClass and NgIf */
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-article-item',
  standalone: true,
  /* Exercise 5: Import NgClass and NgIf */
  imports: [NgClass, NgIf],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css',
  /* Exercise 7: Change detection strategy */
  changeDetection: ChangeDetectionStrategy.OnPush,
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
