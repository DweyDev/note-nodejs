console.log('Starting app.js');

//modules
const fs = require ('fs');
const _ = require ('lodash');
const yargs = require('yargs');

//third party modules
const notes = require('./notes.js')

const argv = yargs.argv;
var command = argv._[0];
console.log(`Command: ${command}`);
console.log(`Process: ${process.argv}`);
console.log("Yargs : ", argv);


if (command == 'add'){
    
    var note = notes.addNote(argv.title, argv.body);
    if (!note) {
        console.log('Cannot duplicate');
    }else{
        console.log('Note added');
        notes.logNote(note);
    }

    }
    else if(command == 'list'){
        
        var allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s)}`);
        allNotes.forEach((note) => {
            notes.logNote(note)
        });

    }else if(command == 'read'){
        var note = notes.getNote(argv.title);

        if(note){
            console.log('Note found');
            notes.logNote(note);

       }
       else{
           console.log('Note not found');
       }
        }else if (command == 'remove'){

       var noteRemoved = notes.removeNote(argv.title);
       var msg = noteRemoved ? 'Note was removed' : 'Note was not removed';
       console.log(msg);
    }
    else{
        console.log('Command not recognized');
    }
