'use strict';

/**
 * @ngdoc directive
 * @name directivesApp.directive:helloPerson
 * @description
 * # helloPerson
 */
angular.module('directivesApp')
  .directive('helloPerson', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the helloPerson directive');
      }
    };
  });
