import Console from '@utils/tools/console';

class Translation {
  public checkJoin(defaultValue: string, text: string, seperator: string) {
    const bad = text.split(seperator).find(entry => entry === defaultValue);
    const regex = new RegExp('/(w+)(W+)?/gm');

    if (bad && bad.length !== 0) {
      Console.translation({ text }, 'Filmlist Card');
    }
  }
}

export const translation = new Translation();
