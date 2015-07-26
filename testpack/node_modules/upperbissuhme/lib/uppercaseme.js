/**
 * Created by bissuh on 26/07/15.
 *
 * uppercaseme.js
 */
"use strict"

var fs = require('fs');

function convertThis() {

    if (process.argv.length > 2) {
        // Read the first additional argument
        var myfile = process.argv[2];

        if (fs.existsSync(myfile)) {
            var content = fs.readFileSync(myfile, 'utf8');
            fs.writeFileSync(myfile, content.toUpperCase());
            console.log("Feito");
        } else {
            console.log("Esse arquivo não foi encontrado bicho! Arquivo: " + myfile);
        }
    } else {
        console.log("Vish: Passa um arquivo aí filho.")
    }

}

exports.convert = convertThis;