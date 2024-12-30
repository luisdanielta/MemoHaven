import type { PbT } from '.';
import type { IUser } from '../../../domain/entities/user';

export interface PbUser extends IUser, PbT {
	emailVisibility: boolean;
}
