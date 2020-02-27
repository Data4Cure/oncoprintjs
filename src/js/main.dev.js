import OncoprintJS from './oncoprint';
import jStat from 'jstat';
import _ from 'lodash';

if (typeof window !== "undefined") {
    window.Oncoprint = OncoprintJS;
    window.jStat = jStat;
}

// module.exports = OncoprintJS;
