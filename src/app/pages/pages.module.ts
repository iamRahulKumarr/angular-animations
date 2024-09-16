import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SomePageComponent } from './some-page/some-page.component';
import { RouterLink, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent, HomeComponent, SomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: '',
            component: HomeComponent,
          },
          {
            path: 'some-page',
            component: SomePageComponent,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class PagesModule {}
