import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  /** @ignore */
  rota: string | undefined;

  /** @ignore */
  urlSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.urlSubscription = this.route.url.subscribe(url => this.rota = url[url.length - 1].path);
  }

  ngOnDestroy(): void {
      if(this.urlSubscription !== undefined && !this.urlSubscription.closed) {
        this.urlSubscription.unsubscribe();
      }
  }

}
