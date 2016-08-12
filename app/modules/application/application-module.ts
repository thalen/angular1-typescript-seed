import 'angular-ui-router';
import { ApplicationController } from './controllers/application-controller';
import tpl from './templates/application-template.html!text'

angular.module('Application', ['ui.router'])
		.config(($stateProvider) => {

			$stateProvider.state('home', {
				url: '/home',
				views: {
					application: {
						template: tpl,
						controller: ApplicationController,
						controllerAs: 'controller'
					}
				}
			});

		})
		.controller('ApplicationController', ApplicationController)
    .run(($state) => {
      $state.go('home');
    });
