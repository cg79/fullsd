import {Component, OnInit} from '@angular/core';
import {PubSubService} from '../../services/pubsub/pubsub';

@Component({
  selector: 'app-notification-wrapper',
  templateUrl: './notification-wrapper.component.html',
  styleUrls: ['./notification-wrapper.component.scss']
})
export class NotificationWrapperComponent implements OnInit {

  constructor(private pubSub: PubSubService) {
  }

  public options = {
    position: ["bottom", "left"],
    timeOut: 5000,
    lastOnBottom: true
  };


  ngOnInit() {
    this.pubSub.subscribe('notification', (notif) => {
      
    })
  }

}
