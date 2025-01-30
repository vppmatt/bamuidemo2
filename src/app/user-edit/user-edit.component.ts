import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService,
    private formBuilder: FormBuilder
  ) {}

  id = 0;

  // userForm = new FormGroup({
  //   id: new FormControl(),
  //   firstname: new FormControl(''),
  //   surname: new FormControl(''),
  // }
  // );

  userForm! : FormGroup;

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      id :0,
      firstname : "",
      surname : ["", [Validators.required, Validators.minLength(4)]]
    });

    this.route.params.subscribe(params => {
        this.id = +params["id"];
        this.dataService.getUser(this.id).subscribe(data => 
            this.userForm.patchValue(data)
        )
    })
  }

  handleSubmit() {
    // this.userForm.controls["id"].valid
    console.log(this.userForm.value);
  }
}
