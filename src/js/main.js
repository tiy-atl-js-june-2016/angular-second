import angular from 'angular';

// Import some controllers
import { GifController } from './controllers/gif.controller';

angular 
  .module('app', [])
  .controller('GifController', GifController);