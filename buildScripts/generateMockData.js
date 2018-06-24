/* This script generates mock data for local development 
This way you don't hace to point to an actual API,
but you can enjoy realistic, but randomized data,
and rapid page loads due to loca, static data 
*/


import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

// const json = JSON.stringify(jsf(schema));

jsf.resolve(schema).then(function(result) {
    fs.writeFile('./src/api/db.json', JSON.stringify(result, null, 2), function(err){
        if (err) {
            return (console.log(chalk.red(err)));
        } else {
            console.log(chalk.green(`Mock Data Generated`));
        }
    });
});