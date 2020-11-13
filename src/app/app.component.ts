import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  string =
    "Duis mollit qui velit ipsum fugiat cupidatat. Non labore commodo sint enim do sunt deserunt eu esse deserunt aliqua magna ea est. Nulla esse ex fugiat consequat cillum cillum mollit do sunt nostrud.";
}
