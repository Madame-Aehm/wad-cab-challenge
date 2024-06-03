import { ChallengerType } from "@/model";

export function generateCourseLeaderboard(challengers: ChallengerType[]) {
  return challengers.filter((challenger) => {
    return challenger.pageChallenge.solved ? true : false
  }).sort((a: ChallengerType, b: ChallengerType) => {
    if (new Date(a.pageChallenge.solved || "") < new Date(b.pageChallenge.solved || "")) {
      return -1;
    } else if (new Date(a.pageChallenge.solved || "") > new Date(b.pageChallenge.solved || "")) {
      return 1;
    } else return 0;
  }).map((challenger) => challenger.name);
}