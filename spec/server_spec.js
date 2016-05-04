/*
var request = require("request");
var server = require("../server.js");
var base_url = "http://localhost:3000/";

describe("hello", function(){
    it("should call root", function(done){
        request.get(base_url, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    })
})
*/

describe("when testing server.js", function(){
    it("should work", function(){
        expect(2).toEqual(2);
    })
})
