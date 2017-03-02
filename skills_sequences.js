// THUNDERBOLT SEQUENCE : c_start_skill>s_action_stage>s_abnomality_begin>s_skill_category>s
    //c_start_skill -45
    //s_action_stage -75
    //s_abnomality_begin -40
    //s_skill_category -9
    //s_cooltime_skill-12  
    //s_action_end-42
//thunderbolt with sf
    //c_start_skill -45
    //s_action_stage -75
    //s_abnomality_begin -40
    //s_skill_category -9
    //s_cooltime_skill-12
    //c_start_instance_skill-47 <<<<< sf command?
    //s_action_end
    //s_skill_category-9
    //s_abnormality_end-16<< sq chain buff end
    //s_action_stage-75
    //s_instance_arrow-48
    //s_start_cooltime_skill-12
    //s_action_end-42
    
    
    
 //RA sequence
    //c_press_skill             <<start casting ra
    //s_abnormality_begin       <<sequential fire avaible abnormal
    //s_player_stat_update     
    //s_player_change_all_prof
    //S_F2P_PremiumUser_Permission
    //s_action_stage
    //s_abnormality_begin
    //s_skill_category
    //s_each_skill_result
    //s_action_stage
    //s_action_stage
    //s_action_stage
    //s_action_change_hp <<<< start overcharge
    //s_action_change_hp  <<<2nd hp tick
    //s_action_change_hp   <<<3rd hp tick
    //c_press_skill         <<release ra
    //s_create_change_hp    <<normal hp regen
    //s_start_cooltime_skill    <<start ra cd
    //s_grant_skill             <<<??? maybe casting sq
    //s_abnormality_end         ´<<finish sq buff    
    //s_player_stat_update
    //s_player_change_all_prof
    //S_F2P_PremiumUser_Permission
    //c_start_instance_skillww
    //s_action_stage
    //s_instance_arrow
    //c_start_instance_skill
    //s_action_end
    //s_skill_category
    //s_abnormality_end
    //s_action_stage
    //s_instance_arrow
    //c_notify_location_in_action
    //s_start_cooltime_skill
    //s_action_end
    //s_creature_change_hp


//if ra canceled mid charge, after s_creatira_change_hp
    //c_cancel_skill
    //c_start_instance_skill
    //c_press_skill
    //s_creatura_change_hp
    //s_action_end
    //s_abnormality_end
    //s_player_stat_update
    //s_player_change_all_prof
    //S_F2P_PremiumUser_Permission
    //s_skill_category
    //s_abnormality_end
    //s_action_stage
    //s_instance_arrow
    //s_start_cooltime_skill
    //s_action_end
    //s_creature_change_hp
    //s_creature_change_hp
//only sequential fire
    //s_skill_category
    //s_abnormality_end
    //S_action_stage
    //s_instance_arrow
    //s_start_cooltime_skill
    //s_action_end
    

    
    
