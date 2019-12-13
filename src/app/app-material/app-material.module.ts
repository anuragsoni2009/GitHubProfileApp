import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class AppMaterialModule { }
