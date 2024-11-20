export type UserId = string;

export type ProfileEditForm = {
  dob: Date;
  gender: "M" | "F";
};

export default async function action(
  { userId }: { userId: UserId },
  form: ProfileEditForm
) {
  return;
}
