import { Component, OnInit, Input } from '@angular/core';
import { propToReadable } from '@sws/shared/utils';

@Component({
  selector: 'card-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() details
  @Input() props
  // details = [{
  //   term: 'Nome',
  //   desc: 'Guilherme'
  // }, {
  //   term: 'Nome',
  //   desc: 'Guilherme'
  // }, {
  //   term: 'Nome',
  //   desc: 'Guilherme'
  // }]
  list: any[]
  constructor() { }

  ngOnInit() {
    console.log(
      propToReadable(this.details, this.props)
    )
  }

}
