#!/usr/bin/env node

var emailTemplates = require('email-templates');
var path           = require('path');
var templatesDir   = path.join(__dirname, 'templates') ;
var renderDir   = path.join(__dirname, 'render') ;
var program = require('commander');
var fs = require('fs');

program.version('0.0.1').usage('<template-folder-name>').parse(process.argv);

if( program.args.length != 1){
  program.help();
}else{
  emailTemplates( 'templates' , { open: '{{', close: '}}' }, function(err, template ) {

    template( program.args[0] , {}, function(err, html, text) {
      if (err) {
        console.log(err);
      } else {
        fs.writeFile( 'render' + '/' + program.args[0] + '.html' ,  html  , function(err) {
          if(err) {
            console.log(err);
          } else {
            console.log("HTML was saved!");
          }
        });
        fs.writeFile( 'render' + '/' + program.args[0] + '.txt' ,  html  , function(err) {
          if(err) {
            console.log(err);
          } else {
            console.log("TEXT was saved!");
          }
        });
      }
    });
  });
}
