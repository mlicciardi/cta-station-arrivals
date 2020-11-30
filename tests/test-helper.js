import Application from 'cta-station-arrivals/app';
import config from 'cta-station-arrivals/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
