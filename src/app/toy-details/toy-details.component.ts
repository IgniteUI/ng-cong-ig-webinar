import { Component, Input, numberAttribute, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { Subject, take, takeUntil } from 'rxjs';
import { ToyModel } from '../models/my-api/toy-model';
import { MyAPIService } from '../services/my-api.service';

@Component({
  selector: 'app-toy-details',
  standalone: true,
  imports: [IgxToggleActionDirective, IgxOverlayOutletDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, RouterLink],
  templateUrl: './toy-details.component.html',
  styleUrls: ['./toy-details.component.scss']
})
export class ToyDetailsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  private _toyID: number = 102;
  @Input({ transform: numberAttribute })
  public get toyID(): number {
    return isNaN(this._toyID as any) ? 102 : this._toyID;
  }
  public set toyID(value: number) {
    this._toyID = value;
    this.toyDetails$.next();
  }
  public toyDetails?: ToyModel;
  public toyDetails$: Subject<void> = new Subject<void>();


  constructor(
    private myAPIService: MyAPIService,
  ) {}

  ngOnInit() {
    this.myAPIService.getToyModel(this.toyID as any).pipe(takeUntil(this.destroy$)).subscribe(
      data => this.toyDetails = data
    );
    this.toyDetails$.pipe(takeUntil(this.destroy$)).subscribe(
      () => { this.myAPIService.getToyModel(this.toyID as any).pipe(take(1)).subscribe(
        data => this.toyDetails = data
    )});
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.toyDetails$.complete();
    this.destroy$.complete();
  }
}
