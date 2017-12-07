"use strict";

define([], function() {

    class SecondClass {

        constructor() {
            this.name = 'SecondClass';
        }

        hello() {
            return 'hello ' + this.name + '!';
        };

    }

    return {
        SecondClass: SecondClass
    };

});