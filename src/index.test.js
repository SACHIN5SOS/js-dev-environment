import fs from 'fs';
import  { JSDOM } from 'jsdom';
import {expect} from 'chai';

describe('Our first Test',()=>{
    it('should pass',()=>{
        expect(true).to.equal(true);
    })
});

describe('index.html',()=>{
    it('should have h1 that says Users',(done)=>{
        const index= fs.readFileSync('./src/index.html',"utf-8");
        const dom = new JSDOM(index);
        const h1 = dom.window.document.getElementsByTagName('h1')[0];

        // JSDOM.env(index,function(err,window){
        //     const h1 = window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal('Users');
        done();
        //     window.close();
        // });

    });
} )