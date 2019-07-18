/**
 * IntelliJ 2019.3 will use the path-mapping from the root tsconfig.json when importing a()
 *     import {a} from '@intellijweb400025/shared';
 * which causes a circular dependency
 *
 * see https://youtrack.jetbrains.com/issue/WEB-40025
 *
 * the import should be
 *     import {a} from './a';
 */
import {a} from '@intellijweb400025/shared';

export function test() {
  a();
}
