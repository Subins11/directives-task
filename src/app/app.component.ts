import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directives';

name:string=""
age:any=""
department:string=""
country:string=""

studentDetails: Array<any>=[]

showTable: boolean = false;
  applyStyle: boolean = false;

  displayTable = () => {
    this.showTable = !this.showTable;
  }
  changeStyle = ()=>{
   this.applyStyle=!this.applyStyle
  }

save =()=>{
console.log(this.studentDetails)
this.studentDetails.push({
  'name': this.name,
  'age': this.age,
  'department': this.department,
  'country': this.country
})
}

}
