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
                // call the server and return the promise
                return $.ajax('api/process_data', options);
            }
        };
    }());

    // create the view
    ns.view = (function() {
        var $string_data = $('#string_data'),
            $number_data = $('#number_data'),
            $table_one = $('.table_one tbody'),
            $table_two = $('.table_two tbody');

        // return public API
        return {
            initialize: function() {
                $number_data.val('');
                $string_data.val('').focus();
            },
            update_tables: function(message) {
                var strings,
                    numbers,
                    html = '';

                for(var i=0, l=message.strings.length; i < l; i++) {
                    strings = message.strings[i];
                    html += '<tr>';
                    for(var ii=0, ll=strings.length; ii < ll; ii++) {
                        html += `<td>${strings[ii]}</td>`;
                    }
                    html += '</tr>';
                    $table_one.empty().append(html);
                }
                html = '';
                for(i=0, l=message.numbers.length; i < l; i++) {
                    numbers = message.numbers[i];
                    html += '<tr>';
                    for(ii=0, ll=numbers.length; ii < ll; ii++) {
                        html += `<td>${numbers[ii]}</td>`;
                    }
                    html += '</tr>';
                    $table_two.empty().append(html);
                }
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
                number_data = $number_data.val(),
                $promise;

            e.preventDefault();

            if (confirm('Are you wish to proceed?')) {
                $promise = model.process_data(string_data, number_data);

                $promise
                    .done(function(message) {
                        view.update_tables(message);
                        view.initialize();
                    })
                    .fail(function(jqXHR, textStatus, errorThrown) {
                        console.dir({
                            jqXHR: jqXHR,
                            textStatus: textStatus,
                            errorThrown: errorThrown
                        });
                    });
            }
        });

        // return the public API
        return {};
    }(ns.model, ns.view));
});