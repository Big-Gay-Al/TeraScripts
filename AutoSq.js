const BUFF_FOCUS = 601450;

const JOB_ARCHER = 5;


const SKILL_RADIANT_ARROW = 3;
const SKILL_THUNDERBOLT = 29;
const SKILL_BURNING_HEART = 22;

module.exports = function AutoSq(dispatch) {
  let cid;
  let job;
  let model;
  let enabled = false;

  let aspd = 1;
  let atkid = 0x7F000000;
  let sent = {};
  let attacks = {};

  let buff = 0;

  dispatch.hook('sLogin', (event) => {
    ({cid, model} = event);

    job = (model - 10101) % 100;
    enabled = [JOB_ARCHER].includes(job);
  });

  dispatch.hook('sPlayerStatUpdate', (event) => {
    aspd = 1 + (event.bonusAttackSpeed / event.baseAttackSpeed);
  });

  dispatch.hook('sAbnormalityBegin', (event) => {
    if (!enabled || !event.target.equals(cid)) return;

    if (job === JOB_ARCHER && event.id === BUFF_FOCUS) {
      buff = Date.now() + event.duration;
    }
  });

  dispatch.hook('sAbnormalityRefresh', (event) => {
    if (!enabled || !event.target.equals(cid)) return;

    if (job === JOB_ARCHER && event.id === BUFF_FOCUS) {
      buff = Date.now() + event.duration;
    }
  });

  dispatch.hook('sAbnormalityEnd', (event) => {
    if (!enabled || !event.target.equals(cid)) return;

    if (job === JOB_ARCHER && event.id === BUFF_FOCUS) {
      buff = 0;
    }
  });
