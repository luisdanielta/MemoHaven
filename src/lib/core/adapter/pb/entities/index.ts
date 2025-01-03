import PocketBase, { RecordService } from 'pocketbase';
import type { PbUser } from './user';
import type { PbNote } from './note';
import type { PbTask } from './task';
import type { PbTag } from './tag';
import type { PbTemplate } from './template';
export type { ClientResponseError } from 'pocketbase';

export interface TypedPocketBase extends PocketBase {
	collection(idOrName: 'users'): RecordService<PbUser>;
	collection(idOrName: 'note'): RecordService<PbNote>;
	collection(idOrName: 'task'): RecordService<PbTask>;
	collection(idOrName: 'tag'): RecordService<PbTag>;
	collection(idOrName: 'template'): RecordService<PbTemplate>;
	collection(idOrName: 'templates'): RecordService<PbTemplate>;
}

export interface PbT {
	id: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
}
