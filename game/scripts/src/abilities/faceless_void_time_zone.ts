import { reloadable } from "../utils/tstl-utils";
import { BaseAbility, registerAbility } from "../utils/dota_ts_adapter";

@reloadable
@registerAbility()
class faceless_void_time_zone extends BaseAbility {
    sound_cast:string = "Hero_FacelessVoid.TimeZone.Cast";
    sound_hit:string = "Hero_FacelessVoid.TimeZone.Hit";
    sound_loop:string = "Hero_FacelessVoid.TimeZone.Loop";
    sound_stop:string = "Hero_FacelessVoid.TimeZone.Stop";
    projectile_time_zone = "particles/units/heroes/hero_faceless_void/faceless_void_time_zone.vpcf";

    OnSpellStart(): void {
        const target = this.GetCursorTarget();
        const abilityLevel = this.GetLevel();
        const abilityRadius = this.GetSpecialValueFor("radius") * abilityLevel;
        print ("当前技能范围为：" + abilityRadius);
    }
}