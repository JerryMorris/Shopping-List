import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  submitted = false;
  public succes = false;
  public model: any;
  itemForm: FormGroup;

  constructor(private listService: ListService, private http: HttpClient) { }

  ngOnInit() {
    this.itemForm = new FormGroup({
      itemName: new FormControl(),
      store: new FormControl(),
      quantity: new FormControl(),

    });
  }

  onSubmit(item) {
    //this.submitted = true;
    //if (this.addItemForm.invalid) {
    //  return;
    //}
    //this.item = { item: (item.value) };

    this.listService.addItem(this.itemForm.value)
      .subscribe(response => {
        console.log(this.itemForm.value);
        item.value = "";
      });
  }

}
