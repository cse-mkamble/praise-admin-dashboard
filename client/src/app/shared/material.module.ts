import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

const modules = [
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatToolbarModule,
    MatBadgeModule,
    MatExpansionModule,
    MatButtonModule
];


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...modules
    ],
    exports: [
        ...modules
    ]
})
export class MaterialModule { }