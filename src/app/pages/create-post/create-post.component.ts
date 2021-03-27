import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private apiService: DataService) {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  save() {
    const data = {
      title: this.postForm.controls.title.value,
      body: this.postForm.controls.body.value,
    };
    this.apiService.addPost(data).subscribe(
      (data) => {
        console.log('basarili', data);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
