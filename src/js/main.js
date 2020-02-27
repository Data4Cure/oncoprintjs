import OncoprintJS from './oncoprint';
import jStat from 'jstat';
import _ from 'lodash';

if (typeof window !== "undefined") {
    window.Oncoprint = OncoprintJS;
    window.jStat = jStat;
    _.noConflict();
}

// module.exports = OncoprintJS;
