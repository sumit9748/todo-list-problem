import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
const materialComponent = [MatToolbarModule, MatIconModule, MatButtonModule]
@NgModule({
  imports: [materialComponent],
  exports: [materialComponent],
})
export class MaterialModule { }
