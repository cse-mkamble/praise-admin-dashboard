import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';

import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatToolbarModule
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