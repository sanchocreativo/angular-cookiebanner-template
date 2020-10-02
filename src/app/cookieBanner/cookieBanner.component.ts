import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {CookieBannerState} from '../states/cookieBanner.state';
import { GetCookieBanner } from '../actions/cookieBanner.action';
import {Observable, Subscription} from 'rxjs';
import {Accordian} from '../models/CookieBanner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './cookieBanner.component.html',
  styleUrls: ['./cookieBanner.component.scss']
})
export class CookieBannerComponent implements OnInit, OnDestroy {
  @Select(CookieBannerState.getCookieBannerList) accordian: Observable<Accordian[]>;
  private formSubscription: Subscription = new Subscription();
  
  closeResult = '';
  constructor(private modalService: NgbModal, private store: Store) {
  }
  
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.store.dispatch(new GetCookieBanner());
  }


  ngOnDestroy(): void {
    this.formSubscription.unsubscribe();
  }

}
