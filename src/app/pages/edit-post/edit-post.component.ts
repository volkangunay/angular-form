import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  postForm: FormGroup;
  id: number;

  constructor(private apiService: DataService, private route: ActivatedRoute) {
    this.postForm = new FormGroup({
      /* Validators.minLength(5), Validators.email */
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required),
    });
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.fetchPost();
  }

  fetchPost() {
    this.apiService.getPost(this.id).subscribe(
      (data: Post) => {
        this.postForm.patchValue({
          title: data.title,
          body: data.body,
        });
        console.log('basarili', data);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  save() {
    const data = {
      title: this.postForm.controls.title.value,
      body: this.postForm.controls.body.value,
    };
    this.apiService.updatePost(this.id, data).subscribe(
      (data) => {
        console.log('Güncellendi', data);
      },
      (error) => {
        console.log('hata', error);
      }
    );
  }
}
