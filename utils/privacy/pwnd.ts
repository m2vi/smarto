import { PwndArgs } from '../../types/privacy';

export class Pwnd {
  constructor(private data: string, private type: PwndArgs) {}
}

export default Pwnd;

// https://haveibeenpwned.com/API/v2#APIVersion
