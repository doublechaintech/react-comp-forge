//
// const parse = _.memoize((obj) => {
//
//   return obj;
// });
import lodash from 'lodash';
import deepdash from 'deepdash';

const _ = deepdash(lodash);

//@objId  @ref

const getObjId = (obj) => _.get(obj, '@objId');
const getRefId = (obj) => _.get(obj, '@ref');


const parse = (obj) => {
  const data = _.cloneDeep(obj);
  const cache = {};
  _.eachDeep(data, (it, key, parentValue) => {
    const objId = getObjId(it);
    const refId = getRefId(it);
    if (!!objId) {
      cache[objId] = it;
    }
    if (!!refId) {
      parentValue[key] = cache[refId];
    }
  });
  return data;
};

const stringify = (obj) => {
  const cache = {};
  return JSON.stringify(obj, (key, value) => {
    const objId = getObjId(value);
    if (!!objId) {
      if (cache[objId]) {
        return { '@ref': objId };
      }
      cache[objId] = true;
    }
    return value;
  }, 2);
};


const GraphObject = {
  parse,
  stringify,
};
export default GraphObject;
