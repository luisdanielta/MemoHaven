import type { PbT } from '.';
import type { PbNote } from './note';
import type { PbTag } from './tag';
import type { PbTask } from './task';
import type { PbTemplate } from './template';
import type { PbUser } from './user';

export interface PbTemplates extends PbT {
	template: PbTemplate;
	password?: string;
	user: PbUser;
	note?: PbNote[];
	task?: PbTask[];
	tag?: PbTag[];
}
