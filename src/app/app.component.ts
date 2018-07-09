import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Breed } from '../model/breed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RanDog';
  result = '';
  breeds: Breed[];
  active: Breed = {};
  urlImage: string;

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll() {
    this.http.get<Breed[]>('https://dog.ceo/api/breeds/list').subscribe(
      result => (this.breeds = result['message']),
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      }
    );
  }

  getUrl(event: MouseEvent, breed: Breed) {
    this.active = breed;
    console.log(this.active);
    this.http.get<any>(`https://dog.ceo/api/breed/${this.active}/images/random`).subscribe(
      result => (this.urlImage = result['message'])
    );
  }


  // ngOnInit(): void {
  //   // this.http.get('https://dog.ceo/api/breeds/list').subscribe(
  //   //   result => {
  //   //     let breed: string[] = result['message'];
  //   //     console.log(result['message'].length);
  //   //     breed.forEach(element => {
  //   //       console.log('Razza', element);
  //   //     });
  //   //   },
  //   //   (err: HttpErrorResponse) => {
  //   //     if (err.error instanceof Error) {
  //   //       console.log('Client-side error occured.');
  //   //     } else {
  //   //       console.log('Server-side error occured.');
  //   //     }
  //   //   }
  //   // );
  // }

}
