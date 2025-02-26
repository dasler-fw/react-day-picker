import { DayPickerContextBase } from './DayPickerContextBase';
import { DayPickerContextMultiple } from './DayPickerContextMultiple';
import { DayPickerContextRange } from './DayPickerContextRange';
import { DayPickerContextSingle } from './DayPickerContextSingle';
import { DayPickerContextUncontrolled } from './DayPickerContextUncontrolled';

/** Represent the value of the [[DayPickerContext]]. */
export type DayPickerContextValue =
  | DayPickerContextBase
  | DayPickerContextUncontrolled
  | DayPickerContextSingle
  | DayPickerContextMultiple
  | DayPickerContextRange;
