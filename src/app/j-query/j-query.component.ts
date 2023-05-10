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
    // on("click", () => {}) | .text()
    $("#changeSubheading1").on("click", () => {
      if (this.toggle % 2 === 1) $("#subheading1").text("jQuery is a fast, lightweight and feature-rich library of JavaScript.");
      else $("#subheading1").text("JavaScript (JS) is the most popular lightweight, interpreted compiled programming language.");
      this.toggle++;
    });

    // .attr("attribute", "value")
    $("#primaryBtn").on("click", () => $("#alert").attr("class", "alert alert-primary"));
    $("#secondaryBtn").on("click", () => $("#alert").attr("class", "alert alert-secondary"));
    $("#successBtn").on("click", () => $("#alert").attr("class", "alert alert-success"));
    $("#dangerBtn").on("click", () => $("#alert").attr("class", "alert alert-danger"));
    $("#darkBtn").on("click", () => $("#alert").attr("class", "alert alert-dark"));

    $("#togglePoem").on("click", () => {
      $("#poemCard").slideToggle();
      $("#poem").slideToggle();
      $("#poemImg").slideToggle();
    })
  }
}
