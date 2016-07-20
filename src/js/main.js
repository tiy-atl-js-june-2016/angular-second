import angular from 'angular';

// Import some controllers
import { GifController } from './controllers/gif.controller';

// Import our constants
import { serverConstant } from './server.constant';

angular 
  .module('app', [])
  .constant('SERVER', serverConstant)
  .controller('GifController', GifController);