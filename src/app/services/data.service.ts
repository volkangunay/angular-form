import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fetchList(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  addPost(post) {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", post)
  }
  getPost(id) {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/" + id);
  }
  updatePost(id, post) {
    return this.http.put("https://jsonplaceholder.typicode.com/posts/" + id, post);
  }
  deletePost(id) {
    return this.http.delete("https://jsonplaceholder.typicode.com/posts/" + id);
  }

}
