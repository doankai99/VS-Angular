import { Component, Input, OnInit } from '@angular/core';
import { isUndefined } from 'lodash';

@Component({
  selector: 'app-grid-column',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.less']
})
export class GridColumnComponent implements OnInit {

  public static DEFAULT_CSS_CLASS_VALUE: string = '';
  public static DEFAULT_FILTERING_VALUE: boolean = true;
  public static DEFAULT_SORTING_VALUE: boolean = true;
  public static DEFAULT_CASE_INSENSITIVE_VALUE: boolean = false;
  public static DEFAULT_OPTION_LABEL: string = '';
  public static FILTER_TYPE_INPUT: string = 'input';
  public static COLUMN_TYPE_STRING: string = 'string';

  @Input() public cssClass!: string;
  @Input() public heading!: string;
  @Input() public name!: string;
  @Input() public filtering!: boolean;
  @Input() public filterType!: string;
  @Input() public defaultOptionLabel!: string;
  @Input() public sorting!: boolean;
  @Input() public width!: string;
  @Input() public typeSort!: string;
  @Input() public icon!: string;
  @Input() public textAlign!: string;
  @Input() public transform!: string;
  @Input() public sortIcon!: string;
  @Input() public type!: string;

  /**
   * Handle OnInit event.
   */
  public ngOnInit(): void {
    if (isUndefined(this.cssClass)) {
      this.cssClass = GridColumnComponent.DEFAULT_CSS_CLASS_VALUE;
    }
    if (isUndefined(this.filtering)) {
      this.filtering = GridColumnComponent.DEFAULT_FILTERING_VALUE;
    }
    if (isUndefined(this.filterType)) {
      this.filterType = GridColumnComponent.FILTER_TYPE_INPUT;
    }
    if (isUndefined(this.sorting)) {
      this.sorting = GridColumnComponent.DEFAULT_SORTING_VALUE;
    }
    if (isUndefined(this.type)) {
      this.type = GridColumnComponent.COLUMN_TYPE_STRING;
    }
    if (isUndefined(this.defaultOptionLabel)) {
      this.defaultOptionLabel = GridColumnComponent.DEFAULT_OPTION_LABEL;
    }
  }
}
