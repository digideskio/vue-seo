import Head from './components/head.vue'
import Title from './components/title.vue'
import Organization from './components/organization.vue'
import Breadcrumb from './components/breadcrumbs.vue'
import VueStore from './utils/vueStore.js'
import Type from './components/type.vue'
import Lang from './components/lang.vue'
import Description from './components/description.vue'
import SeoImage from './components/image.vue'
import {policies} from './utils/store.js'
import Google from './google/displayer.vue'
import OpenGraph from './openGraph/displayer.vue'
import _ from 'lodash'


module.exports = {
  policies,
  install (Vue, options = {}) {
    VueStore.Vue = Vue;
    _.merge(VueStore.options, {
      openGraph: true,
      html: true,
      schemaOrg: true,
    },options, {
      policies: {
        breadcrumbs: policies.identity,
        'lang': policies.repeat,
        'image': policies.repeat
      }
    });

    Vue.component('seoTitle', Title);
    Vue.component('seoOrganization', Organization);
    Vue.component('seoBreadcrumb', Breadcrumb);
    Vue.component('seoImage', SeoImage);
    Vue.component('seoType', Type);
    Vue.component('seoLang', Lang);
    Vue.component('seoDescription', Description);

    Head.el = 'head'
    Head.comps.push(Vue.extend(Google));
    Head.comps.push(Vue.extend(OpenGraph));
    new Vue(Head);
  }
}
