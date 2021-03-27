import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  posts: Array<Post> = [];

  constructor(private apiService: DataService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.apiService.fetchList().subscribe(
      (data: Array<Post>) => {
        this.posts = data;
      },
      (error) => {
        console.log('érror', error);
      },
      () => {
        console.log('finalize');
      }
    );
  }

  deletePost(id: number) {
    this.apiService.deletePost(id).subscribe(
      (data) => {
        console.log('Silindi', data);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
