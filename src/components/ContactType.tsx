export interface Icontact {
  id: string;
  firstName: string;
  lastName: string;
  state: String;
}

export const dummylist: Icontact[] = [
  {
    id: new Date().toJSON().toString(),
    firstName: "vandana",
    lastName: "poddar",
    state: "active",
  },
];

// export enum PageEnum {
//   list,
//   add,
//   edit,
// }
