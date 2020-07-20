import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule, MatList } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
  ],
})
export class AppMaterialModule {}
