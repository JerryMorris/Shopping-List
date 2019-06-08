import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ListService } from '../services/list.service';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  editItemForm: FormGroup;
  public model: any;
  constructor(private listService: ListService, private http: HttpClient) { }

  ngOnInit() {
    this.editItemForm = new FormGroup({
      itemName: new FormControl(),
      store: new FormControl(),
      quantity: new FormControl(),
    });
  }

  getItem(id) {
    this.listService.getItem(id).subscribe(response => {
      console.log(id)
      id.value = "";
    });
  }

  updateItem(item) {
    this.listService.updateItem(this.editItemForm.value)
      .subscribe(response => {
        console.log(this.editItemForm.value);
        item.value = "";
      });
  }
}
