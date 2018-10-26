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
        var $string_data = $('#string_data'),
            $number_data = $('#number_data');

        // return public API
        return {
            initialize: function() {
                $number_data.val('');
                $string_data.val('').focus();
            }
        };
    }());

    // create the controller
    ns.controller = (function(m, v) {
        var model = m,
            view = v;

        view.initialize();

        // handle the cancel event
        $('#cancel').on('click', function(e) {
            e.preventDefault();
            view.initialize();
        });


    }(ns.model, ns.view));
});