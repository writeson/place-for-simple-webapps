/*
 * This file drives the web application demonstration
 */

// declare the namespace container
var ns = {};

$(document).ready(function() {
    'use strict';

    // create the model
    ns.model = (function() {
        // return public API
        return {

        };
    }());

    // create the view
    ns.view = (function() {
        // return public API
        return {

        };
    }());

    // create the controller
    ns.controller = (function(m, v) {
        var model = m,
            view = v;

        console.log('MVC initialized');

    }(ns.model, ns.view));
});