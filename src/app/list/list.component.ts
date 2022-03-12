import { Component, OnInit } from '@angular/core';
import { itemsList } from '../items';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  listItems = itemsList;
}
