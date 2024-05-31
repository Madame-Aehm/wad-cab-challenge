import { ChallengerDataType } from "@/components/JoinChallenge";

export function validateCreateChallenger(data: ChallengerDataType) {
  let valid = true;
  const validation: ChallengerDataType = {
    course: "",
    name: ""
  }
  if (data.name.trim() === "") {
    validation.name = "You must choose an alias";
    valid = false;
  }
  if (data.course === "") {
    validation.course = "You must choose a course";
    valid = false;
  }
  return {
    valid, validation
  }
}