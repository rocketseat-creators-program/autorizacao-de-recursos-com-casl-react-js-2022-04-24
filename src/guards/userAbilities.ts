import { ActionsSubjectAbility } from "./ability";

export type UserType = "admin" | "user";

export const getAbilitiesByUser = (user: UserType) => {
  const abilities: Record<UserType, ActionsSubjectAbility[]> = {
    user: [{ action: "update", subject: "Task" }],
    admin: [
      { action: "create", subject: "Task" },
      { action: "delete", subject: "Task" },
    ],
  };

  return abilities[user];
};
