import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;
declare var Switchery:any;

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initJquery();
  }

  initJquery() {
    //custom checkbox and radiobox
    $('input.flat').iCheck({
      checkboxClass: 'icheckbox_flat-green',
      radioClass: 'iradio_flat-green'
    });

    //tags
    $('#tags_1').tagsInput({
      width: 'auto'
    });

    //switch checkbox
    if ($(".js-switch")[0]) {
        var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
        elems.forEach(function (html) {
            var switchery = new Switchery(html, {
                color: '#26B99A'
            });
        });
    }
  }
  
}
