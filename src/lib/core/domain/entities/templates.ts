import type { INote } from './note';
import type { ITag } from './tag';
import type { ITask } from './task';
import type { ITemplate } from './template';

export interface ITemplates {
	name: ITemplate;
	password?: string;
	note?: INote[];
	task?: ITask[];
	tag?: ITag[];
}
