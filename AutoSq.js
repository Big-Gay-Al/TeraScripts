const BUFF_FOCUS = 601450;

const JOB_ARCHER = 5;


const SKILL_RADIANT_ARROW = 3;
const SKILL_SEQUENTIAL_FIRE = 22;
const SKILL_THUNDERBOLT = 29;


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
  }
});
  
//FOR THUNDERBOLT  
dispatch.hook('cStartSkill', (event) => {
    if (!enabled || job !== JOB_ARCHER) return;

    const skill = event.skill - 0x4000000;
    const group = Math.floor(skill / 10000);
    const hit = skill % 100;

    if (group !== SKILL_THUNDERBOLT) return;

    const speed = aspd;
    const tbduration=3000 //duration of thunderbolt animation
    const ping = 180
  

    setTimeout(tbsq, (tbduration / speed)-ping,event);


  });
  
        function tbsq(event) {
          
          dispatch.toServer('cStartInstanceSkill', {
          skill: 67329664
          x: event.x || event.x1,
          y: event.y || event.y1,
          z: event.z || event.z1,
          w: event.w,
          unk: 0,
          targets:[],  

    });



  }
};
    
    
