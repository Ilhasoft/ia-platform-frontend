import CommentQuestion from 'bh/assets/icons/comment-question.svg';
import PlusCircle from 'bh/assets/icons/plus-circle.svg';
import CloseCircle from 'bh/assets/icons/close-circle.svg';
import Close from 'bh/assets/icons/close.svg';
import DotsHorizontal from 'bh/assets/icons/dots-horizontal.svg';
import MenuDown from 'bh/assets/icons/menu-down.svg';
import Earth from 'bh/assets/icons/earth.svg';
import Equal from 'bh/assets/icons/equal.svg';
import School from 'bh/assets/icons/school.svg';
import Minus from 'bh/assets/icons/minus.svg';
import Check from 'bh/assets/icons/check.svg';
import Exclamation from 'bh/assets/icons/exclamation.svg';
import Refresh from 'bh/assets/icons/refresh.svg';
import Information from 'bh/assets/icons/information.svg';
import ClipboardTextOutline from 'bh/assets/icons/clipboard-text-outline.svg';
import FlagBr from 'bh/assets/icons/flag-br.svg';
import FlagDe from 'bh/assets/icons/flag-de.svg';
import FlagEs from 'bh/assets/icons/flag-es.svg';
import FlagFr from 'bh/assets/icons/flag-fr.svg';
import FlagIt from 'bh/assets/icons/flag-it.svg';
import FlagNl from 'bh/assets/icons/flag-nl.svg';
import FlagPt from 'bh/assets/icons/flag-pt.svg';
import FlagUs from 'bh/assets/icons/flag-us.svg';
import FlagId from 'bh/assets/icons/flag-id.svg';
import FlagMn from 'bh/assets/icons/flag-mn.svg';


export const icons = {
  'help-text': CommentQuestion,
  'plus-circle': PlusCircle,
  'close-circle': CloseCircle,
  close: Close,
  'dots-horizontal': DotsHorizontal,
  'menu-down': MenuDown,
  earth: Earth,
  equal: Equal,
  school: School,
  minus: Minus,
  check: Check,
  exclamation: Exclamation,
  refresh: Refresh,
  information: Information,
  'clipboard-text-outline': ClipboardTextOutline,
  'flag-br': FlagBr,
  'flag-de': FlagDe,
  'flag-es': FlagEs,
  'flag-fr': FlagFr,
  'flag-it': FlagIt,
  'flag-nl': FlagNl,
  'flag-pt': FlagPt,
  'flag-us': FlagUs,
  'flag-id': FlagId,
  'flag-mn': FlagMn,
};

/* istanbul ignore next */
const trimStart = () => v => (v.trimStart());

/* istanbul ignore next */
const removeBreakLines = () => v => (v.replace('\n', ''));

/* istanbul ignore next */
const removeMultipleWhiteSpaces = () => v => (v.replace(/\s{2,}/g, ' '));

export const formatters = {
  trimStart,
  removeBreakLines,
  removeMultipleWhiteSpaces,
};