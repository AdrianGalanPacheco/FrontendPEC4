import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleItemComponent } from './article-item/article-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Added the article item component
  imports: [RouterOutlet, ArticleItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
