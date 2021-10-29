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
import { MatSelectModule } from '@angular/material/select';

import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const modules = [
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatToolbarModule,
    MatBadgeModule,
    MatExpansionModule,
    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    BsDatepickerModule
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