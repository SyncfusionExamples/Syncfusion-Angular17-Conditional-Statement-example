import { Component } from '@angular/core';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TabModule, CommonModule, RouterOutlet],
  template: `
  <h1>
    Syncfusion Angular Tab Component
  </h1>

  <ejs-tab id="socialMedia">
  <e-tabitems>
    @if (socialMedia === 'Twitter') {
    <e-tabitem [header]='header[0]' [content]="content[0]"></e-tabitem>
    }
    @if (socialMedia === 'Facebook') {
    <e-tabitem [header]='header[1]' [content]="content[1]"></e-tabitem>
    }
    @if (socialMedia === 'WhatsApp') {
    <e-tabitem [header]='header[2]' [content]="content[2]"></e-tabitem>
    }
    @else {
    <p>No tabs to display.</p>
    }
  </e-tabitems>
</ejs-tab>
  `
})

export class AppComponent {  
  public socialMedia: string = 'Twitter';
  public header: Object[] = [{ 'text': 'Twitter' }, { 'text': 'Facebook' },{ 'text': 'WhatsApp' }];
  public content: string[] = [
        'Twitter is an online social networking service that enables users to send and read short 140-character ',
        'Facebook is an online social networking service headquartered in Menlo Park, California.',
        'WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates under a subscription business model.'
      ]
}
