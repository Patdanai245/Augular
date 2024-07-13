import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
    title = 'todo List'
    imageCoverUrl ='/img/todo-list.png'

    onImageClick(){
      alert("ยินดีต้อนรับ")
    }
    major = 'Programmer'
}

