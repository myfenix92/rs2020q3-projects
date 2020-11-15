import { CreatePuzzle } from './Create Puzzle/index';
import { MoveBoxes } from './Move Boxes/index';
import { RulesPuzzle } from './Rules Puzzle/index';
import { SettingPuzzle } from './Setting Puzzle/index';
import { WinPuzzle } from './Win Puzzle/index';

const createPuzzle = new CreatePuzzle();
const moveBoxes = new MoveBoxes();
const rulesPuzzle = new RulesPuzzle();
const settingPuzzle = new SettingPuzzle();
const winPuzzle = new WinPuzzle();

export {
  createPuzzle, moveBoxes, rulesPuzzle, settingPuzzle, winPuzzle,
};
