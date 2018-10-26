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
            process_data: function(string_data, number_data) {
                var options = {
                    method: 'GET',
                    dataType: 'json',
                    data: {
                        string_data: string_data,
                        number_data: number_data
                    }
                };
                // call the server
                $.ajax('api/process_data', options);
            }
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
            view = v,
            $string_data = $('#string_data'),
            $number_data = $('#number_data');

        view.initialize();
        
        // handle the cancel event
        $('#cancel').on('click', function(e) {
            e.preventDefault();
            view.initialize();
        });

        // handle the okay event
        $('#okay').on('click', function(e) {
            var string_data = $string_data.val(),
                number_data = $number_data.val();

            e.preventDefault();

            if (confirm('Are you wish to proceed?')) {
                model.process_data(string_data, number_data);
            }
        });

        // return the public API
        return {};
    }(ns.model, ns.view));
});