import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IgxAvatarComponent, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IgxIconButtonDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxAvatarComponent, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
