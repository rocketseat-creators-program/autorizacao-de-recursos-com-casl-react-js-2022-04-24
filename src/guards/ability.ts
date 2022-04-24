import { Ability } from "@casl/ability";

export type Action = "create" | "update" | "delete";
export type Subject = "Task";

export type ActionsSubjectAbility = {
  action: Action;
  subject: Subject;
};

export const buildAbility = (abilities: ActionsSubjectAbility[]) => {
  const ability = new Ability<[Action, Subject]>();

  ability.update(abilities);

  return ability;
};
