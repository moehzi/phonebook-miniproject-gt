export default interface ContactList {
  created_at: string;
  first_name: string;
  id: number;
  last_name: string;
  phones: Phones[];
}

interface Phones {
  number: string;
}
