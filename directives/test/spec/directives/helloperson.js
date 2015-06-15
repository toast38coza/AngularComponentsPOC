'use strict';

describe('Directive: helloPerson', function () {

  // load the directive's module
  beforeEach(module('directivesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hello-person></hello-person>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the helloPerson directive');
  }));
});
