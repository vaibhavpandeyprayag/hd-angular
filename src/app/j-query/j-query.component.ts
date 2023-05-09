import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-j-query',
  templateUrl: './j-query.component.html',
  styleUrls: ['./j-query.component.css']
})
export class JQueryComponent {
  toggle = 0;

  ngOnInit() {
    $("#changeSubheading1").on("click", function() {
      if ($("#toggle") % 2 === 1) $("#subheading1").text("jQuery is a fast, lightweight and feature-rich library of JavaScript.");
      else $("#subheading1").text("JavaScript (JS) is the most popular lightweight, interpreted compiled programming language.");
      $("#toggle").val($("#toggle") + 1);
      console.log($("#toggle"));
    });

  }
}
