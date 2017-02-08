/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function (){
    var mainDiv = $("#mainDiv");
    mainDiv.text("Hey there what's up?");
    var foop = {text: "hello", class: "color: red"};
    mainDiv.append(foop);
});
