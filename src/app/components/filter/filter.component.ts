import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ICategory } from '../../models/icategory';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  categories: ICategory[] = [];
  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    return this.categoryService.getAllCategories().subscribe(res => {
      console.log(res);
      this.categories = res;
      this.categories.forEach(element => {
        console.log(element.name);
      });
    });
  }
}

