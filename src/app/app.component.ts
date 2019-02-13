import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  currentLanguageCode: string = "en";

  languages = [
    { code: "en", label: "English", seleted: false },
    { code: "ko", label: "한국어", seleted: false }
  ];

  constructor(@Inject(LOCALE_ID) public localeId: string) { }

  ngOnInit() {
    if (this.localeId == "ko") this.currentLanguageCode = "ko";
    else this.currentLanguageCode = "en";
  }
}
