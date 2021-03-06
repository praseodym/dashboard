// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import chromeModule from 'chrome/module';
import componentsModule from 'common/components/components_module';
import filtersModule from 'common/filters/filters_module';
import namespaceModule from 'common/namespace/namespace_module';
import eventsModule from 'events/module';

import {serviceInfoComponent} from './detail/info_component';
import {servicePodsResource} from './detail/stateconfig';
import {serviceCardComponent} from './list/card_component';
import {serviceCardListComponent} from './list/cardlist_component';
import {serviceListResource} from './list/stateconfig';
import stateConfig from './stateconfig';

/**
 * Angular module for the Secret resource.
 */
export default angular
    .module(
        'kubernetesDashboard.service',
        [
          'ngMaterial',
          'ngResource',
          'ui.router',
          chromeModule.name,
          componentsModule.name,
          eventsModule.name,
          filtersModule.name,
          namespaceModule.name,
        ])
    .config(stateConfig)
    .component('kdServiceCard', serviceCardComponent)
    .component('kdServiceCardList', serviceCardListComponent)
    .component('kdServiceInfo', serviceInfoComponent)
    .factory('kdServiceListResource', serviceListResource)
    .factory('kdServicePodsResource', servicePodsResource);
